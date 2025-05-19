let count = 0;

export default function handler(req, res) {
  if (req.method === 'POST') {
    count++;
    // Sadece sayıyı döndür (JSON olarak değil)
    res.status(200).send(count.toString());
  } else if (req.method === 'GET') {
    // Sadece sayıyı döndür (JSON olarak değil)
    res.status(200).send(count.toString());
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
