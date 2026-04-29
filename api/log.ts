import fs from 'fs';
import path from 'path';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { logDetails } = req.body;
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1486567892030980219/CJI43XV-5j3cWMBJSUPPlQkUIyDwV2lUqRjDDKg2jTZRFV5KMd-S3MzzhBvvWbVTC_So';

  try {
    // 1. Send to Discord
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: `\`\`\`\n${logDetails}\n\`\`\`` })
    }).catch(console.error);

    // 2. Append to local .txt file
    // Note: On Vercel, only /tmp is writable at runtime. In local dev, we write to the project directory.
    const isVercel = process.env.VERCEL;
    const logFilePath = isVercel 
      ? path.join('/tmp', 'activity_logs.txt')
      : path.join(process.cwd(), 'activity_logs.txt');

    fs.appendFileSync(logFilePath, logDetails + '\n');

    res.status(200).json({ success: true, message: 'Logged successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send log' });
  }
}
