import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);

// ── Middleware ──────────────────────────────────────────────────
app.use(compression());
app.use(express.json({ limit: '1mb' }));
// Trust the first proxy (Nginx) so req.ip reflects the real client
app.set('trust proxy', true);

// ── Ensure user_logs directory exists ──────────────────────────
const userLogsDir = path.join(__dirname, 'user_logs');
if (!fs.existsSync(userLogsDir)) {
  fs.mkdirSync(userLogsDir, { recursive: true });
}

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
