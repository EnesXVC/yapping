export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  // Sadece Roblox'tan gelen isteklere script döndür
  if (userAgent.includes('Roblox')) {
    res.status(200).send(`
      print("Chaos Hub Aktif!")
      -- Ana script buraya gelecek
    `);
  } else {
    // Tarayıcıdan erişenlere mesaj göster
    res.status(200).send("Burada ne işin var?");
  }
}
