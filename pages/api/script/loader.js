export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Roblox'tan gelen istekleri kontrol et
  if (userAgent.includes('Roblox')) {
    res.status(200).send(`
      print("Merhaba Test Hub!")
      print("Merhaba Test Hub!")
    `);
  } else {
    res.status(200).send("Burada ne işin var?");
  }
}
