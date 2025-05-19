let count = 0;
export default async function handler(req, res) {
  if (req.method === 'POST') {
    count++;
    await new Promise(resolve => setTimeout(resolve, 100));
    return res.status(200).send(count.toString());
  }
  if (req.method === 'GET') {
    return res.status(200).send(count.toString());
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
}
