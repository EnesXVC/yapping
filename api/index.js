let count = 0;

export default async function handler(req, res) {
  // POST isteği gelirse count'u 1 artır
  if (req.method === 'POST') {
    count++;
    await new Promise(resolve => setTimeout(resolve, 100)); // Küçük bir bekleme ekle
    return res.status(200).send(count.toString());
  }
  
  // GET isteği gelirse count'u gönder
  if (req.method === 'GET') {
    return res.status(200).send(count.toString());
  }

  // Diğer metodlara izin verme
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
}
