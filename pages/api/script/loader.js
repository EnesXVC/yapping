export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.includes('Roblox')) {
    res.status(200).send(`
      -- GERÇEK SCRIPT BURAYA YAZILACAK
      local player = game.Players.LocalPlayer
      local character = player.Character or player.CharacterAdded:Wait()
      
      character.Humanoid.WalkSpeed = 50  -- Hız hack örneği
      print("Chaos Hub yüklendi!")
    `);
  } else {
    res.status(200).send("Burada ne işin var?");
  }
}
