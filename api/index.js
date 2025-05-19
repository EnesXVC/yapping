let count = 0; // Basit sayaç (sunucu restart ederse sıfırlanır)

export default function handler(req, res) {
  // POST isteği: Sayacı 1 artır
  if (req.method === 'POST') {
    count++;
    return res.status(200).send(count.toString());
  }

  // GET isteği: Sayacı oku
  if (req.method === 'GET') {
    return res.status(200).send(count.toString());
  }

  // ✨ YENİ: RESET isteği (sayaç sıfırlama)
  if (req.method === 'DELETE') { // Özel bir reset isteği
    count = 0;
    return res.status(200).send("0");
  }

  // Diğer metodlara izin verme
  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  res.status(405).end('Method Not Allowed');
}
