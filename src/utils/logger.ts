export const logActivity = async (action: string) => {
  try {
    const rawUsername = localStorage.getItem('prepjua_username') || localStorage.getItem('username') || '';
    const username = rawUsername.replace(/^"(.*)"$/, '$1') || 'Unknown User';
    const timestamp = new Date().toISOString();
    
    // Format the log
    const logDetails = `[${timestamp}] User: ${username} | Action: ${action}`;

    // Send to Discord via Vercel Serverless Function (to bypass CORS & write to file)
    fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logDetails })
    }).catch(console.error);

  } catch (error) {
    console.error('Failed to log activity', error);
  }
};
