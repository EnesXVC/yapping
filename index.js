let count = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    count++;
    res.status(200).json({ message: "Count incremented", count });
  } else if (req.method === "GET") {
    res.status(200).json({ count });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
