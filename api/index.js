// This file should be at /api/index.js
let count = 0;

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Increment the count
    count++;
    res.status(200).json({ count });
  } else if (req.method === 'GET') {
    // Just return the current count
    res.status(200).json({ count });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
