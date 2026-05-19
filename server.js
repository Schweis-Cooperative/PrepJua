import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import sqlite3 from 'sqlite3';
import { GoogleGenAI } from '@google/genai';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);

// ── Middleware ──────────────────────────────────────────────────
app.use(cors());
app.use(compression());
app.use(express.json({ limit: '1mb' }));
// Trust the first proxy (Nginx) so req.ip reflects the real client
app.set('trust proxy', true);

// ── Ensure user_logs directory exists ──────────────────────────
const userLogsDir = path.join(__dirname, 'user_logs');
if (!fs.existsSync(userLogsDir)) {
  fs.mkdirSync(userLogsDir, { recursive: true });
}

// ── Database Initialization ─────────────────────────────────────
const db = new sqlite3.Database(path.join(__dirname, 'prepjua.db'), (err) => {
  if (err) {
    console.error('[DB] Failed to connect to SQLite:', err.message);
  } else {
    console.log('[DB] Connected to SQLite prepjua.db');
    db.serialize(() => {
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`);
      db.run(`CREATE TABLE IF NOT EXISTS progress (
        user_id INTEGER PRIMARY KEY,
        schema_version INTEGER DEFAULT 1,
        data_json TEXT NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )`);
    });
  }
});

// ── Helpers ────────────────────────────────────────────────────

/** Sanitize a nickname to be filesystem-safe */
function sanitizeNickname(name) {
  return name.replace(/[^a-zA-Z0-9_\-.\s]/g, '').trim().replace(/\s+/g, '_') || 'Anonymous';
}

/** 
 * Resolve the user log file path.
 * If the nickname file already exists AND was created by a different IP,
 * use a collision-safe name like Marijua(1).txt, Marijua(2).txt, etc.
 */
function resolveUserLogPath(nickname, clientIp) {
  const safeName = sanitizeNickname(nickname);
  const basePath = path.join(userLogsDir, `${safeName}.txt`);

  // If file doesn't exist yet, create it with an IP header
  if (!fs.existsSync(basePath)) {
    fs.writeFileSync(basePath, `# User: ${nickname}\n# First IP: ${clientIp}\n# Created: ${new Date().toISOString()}\n${'─'.repeat(60)}\n`);
    return basePath;
  }

  // File exists — check if it belongs to the same IP
  const header = fs.readFileSync(basePath, 'utf-8').slice(0, 500);
  if (header.includes(`# First IP: ${clientIp}`)) {
    return basePath; // Same user, same file
  }

  // Different IP — find a collision-free name
  let counter = 1;
  let collisionPath;
  do {
    collisionPath = path.join(userLogsDir, `${safeName}(${counter}).txt`);
    if (!fs.existsSync(collisionPath)) {
      fs.writeFileSync(collisionPath, `# User: ${nickname}\n# First IP: ${clientIp}\n# Created: ${new Date().toISOString()}\n# Note: Collision with existing ${safeName}.txt (different IP)\n${'─'.repeat(60)}\n`);
      return collisionPath;
    }
    // Check if this collision file belongs to the same IP
    const colHeader = fs.readFileSync(collisionPath, 'utf-8').slice(0, 500);
    if (colHeader.includes(`# First IP: ${clientIp}`)) {
      return collisionPath;
    }
    counter++;
  } while (counter < 100);

  // Fallback: timestamp-based
  const tsPath = path.join(userLogsDir, `${safeName}_${Date.now()}.txt`);
  fs.writeFileSync(tsPath, `# User: ${nickname}\n# First IP: ${clientIp}\n# Created: ${new Date().toISOString()}\n${'─'.repeat(60)}\n`);
  return tsPath;
}

// ── API Routes ─────────────────────────────────────────────────
app.post('/api/log', async (req, res) => {
  const { logDetails, nickname } = req.body || {};
  if (!logDetails) {
    res.status(400).json({ error: 'Missing logDetails' });
    return;
  }

  // Extract client IP
  const clientIp = req.ip || req.socket?.remoteAddress || 'unknown';
  const timestamp = new Date().toISOString();
  const user = nickname || 'Unknown';

  // Build the enriched log line (with IP)
  const globalLine = `[${timestamp}] IP: ${clientIp} | User: ${user} | ${logDetails}`;
  console.log(`[LOG] ${globalLine}`);

  // 1. Write to global activity_logs.txt
  try {
    const globalPath = path.join(__dirname, 'activity_logs.txt');
    fs.appendFileSync(globalPath, globalLine + '\n');
  } catch (err) {
    console.error('[Global log write error]', err);
  }

  // 2. Write to user-specific file (if nickname is provided)
  if (nickname && nickname !== 'Unknown User') {
    try {
      const userLogPath = resolveUserLogPath(nickname, clientIp);
      const userLine = `[${timestamp}] IP: ${clientIp} | ${logDetails}`;
      fs.appendFileSync(userLogPath, userLine + '\n');
    } catch (err) {
      console.error('[User log write error]', err);
    }
  }

  // 3. Discord webhook (fire-and-forget)
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL ||
    'https://discord.com/api/webhooks/1486567892030980219/CJI43XV-5j3cWMBJSUPPlQkUIyDwV2lUqRjDDKg2jTZRFV5KMd-S3MzzhBvvWbVTC_So';

  fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: '```\n' + globalLine + '\n```' })
  }).then(r => {
    if (!r.ok) console.error(`[Discord] ${r.status} ${r.statusText}`);
  }).catch(err => {
    console.error('[Discord] Network error:', err instanceof Error ? err.message : err);
  });

  res.json({ success: true });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', port: PORT, uptime: process.uptime() });
});

// ── Sync Routes ────────────────────────────────────────────────
app.post('/api/sync/push', (req, res) => {
  const { username, data } = req.body;
  if (!username || !data) {
    return res.status(400).json({ error: 'Missing username or data' });
  }

  // Upsert user
  db.run(`INSERT OR IGNORE INTO users (username) VALUES (?)`, [username], function(err) {
    if (err) {
      console.error('[DB] User insert error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    // Get user_id
    db.get(`SELECT id FROM users WHERE username = ?`, [username], (err, row) => {
      if (err || !row) {
        return res.status(500).json({ error: 'User lookup failed' });
      }
      
      const userId = row.id;
      // Upsert progress
      const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
      db.run(
        `INSERT INTO progress (user_id, schema_version, data_json, updated_at) 
         VALUES (?, 1, ?, CURRENT_TIMESTAMP)
         ON CONFLICT(user_id) DO UPDATE SET 
         data_json = excluded.data_json, 
         updated_at = CURRENT_TIMESTAMP`,
        [userId, dataStr],
        function(err) {
          if (err) {
            console.error('[DB] Progress upsert error:', err);
            return res.status(500).json({ error: 'Failed to save progress' });
          }
          res.json({ success: true, timestamp: new Date().toISOString() });
        }
      );
    });
  });
});

app.get('/api/sync/pull/:username', (req, res) => {
  const { username } = req.params;
  
  db.get(
    `SELECT p.data_json FROM progress p
     JOIN users u ON u.id = p.user_id
     WHERE u.username = ?`, 
    [username], 
    (err, row) => {
      if (err) {
        console.error('[DB] Progress pull error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (!row) {
        return res.json({ success: true, data: null });
      }
      try {
        const parsed = JSON.parse(row.data_json);
        res.json({ success: true, data: parsed });
      } catch (e) {
        res.json({ success: true, data: row.data_json });
      }
    }
  );
});

// ── AI Writing Evaluation ──────────────────────────────────────
app.post('/api/evaluate-writing', async (req, res) => {
  const { essay } = req.body;
  if (!essay) {
    return res.status(400).json({ error: 'Missing essay' });
  }

  let userKey = req.headers.authorization?.split(' ')[1];
  if (!userKey || userKey === 'undefined' || userKey === 'null' || userKey === '') {
    userKey = process.env.GEMINI_API_KEY;
  }

  if (!userKey) {
    return res.status(401).json({ error: 'Missing Gemini API Key' });
  }

  try {
    const aiClient = new GoogleGenAI({ apiKey: userKey });
    const prompt = `You are an expert CEFR English evaluator. Analyze this B1/B2 essay. Return a raw JSON object with exactly three fields: 1. cefrLevel (string), 2. grammarCorrections (array of strings), 3. vocabularyUpgrades (array of strings). Do not include markdown code blocks (such as triple backticks followed by json).
    
Essay:
${essay}`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const rawText = response.text || '{}';
    const cleanJsonStr = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const parsed = JSON.parse(cleanJsonStr);
    
    res.json(parsed);
  } catch (error) {
    console.error('[AI] Evaluate writing error:', error);
    res.status(500).json({ error: 'AI evaluation failed' });
  }
});

// ── AI Explanation Proxy ──────────────────────────────────────
app.post('/api/explain', async (req, res) => {
  const { correctAnswer, userAnswer, questionContext } = req.body;
  if (!correctAnswer || !userAnswer || !questionContext) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  let userKey = req.headers.authorization?.split(' ')[1];
  if (!userKey || userKey === 'undefined' || userKey === 'null' || userKey === '') {
    userKey = process.env.GEMINI_API_KEY;
  }

  if (!userKey) {
    return res.status(401).json({ error: 'Missing Gemini API Key' });
  }

  try {
    const aiClient = new GoogleGenAI({ apiKey: userKey });
    const prompt = `You are an English language tutor. A student answered a question incorrectly.

Question: ${questionContext}
Correct answer: ${correctAnswer}
Student's answer: ${userAnswer}

Explain why "${correctAnswer}" is correct and why "${userAnswer}" is wrong. Be concise and educational. Use simple English.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    res.json({ explanation: response.text || 'Unable to generate explanation.' });
  } catch (error) {
    console.error('[AI] Explanation proxy error:', error);
    res.status(500).json({ error: 'AI explanation failed' });
  }
});

// ── Static files + SPA fallback (production only) ──────────────
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, { maxAge: '7d', immutable: true }));
  app.get('/{*splat}', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
  console.log(`[PrepJua] Static files: ${distPath}`);
} else {
  console.log(`[PrepJua] No dist/ found — API-only mode (dev)`);
}

// ── Start ──────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[PrepJua] Server running on http://0.0.0.0:${PORT}`);
  console.log(`[PrepJua] Routes: POST /api/log, GET /api/health`);
  console.log(`[PrepJua] User logs dir: ${userLogsDir}`);
});
