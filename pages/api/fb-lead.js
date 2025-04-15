export default async function handler(req, res) {
    const { FB_PIXEL_ID, FB_ACCESS_TOKEN } = process.env;
  
    const eventData = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: req.headers.referer || 'https://chasefunnel.vercel.app/',
      action_source: 'website',
      user_data: {
        // em: sha256('user@example.com') - optional
      },
    };
  
    try {
      const fbResponse = await fetch(
        `https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: [eventData] }),
        }
      );
  
      const data = await fbResponse.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
  }
  