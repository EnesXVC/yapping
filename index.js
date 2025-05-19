
let count = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    count++;
    res.status(200).json({ count });
  } else if (req.method === "GET") {
    // Eğer tarayıcıdan direk açılırsa HTML göster
    if (req.headers.accept && req.headers.accept.includes("text/html")) {
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(`
        <html>
          <head><title>Current Count</title></head>
          <body>
            <h1>${count}</h1>
          </body>
        </html>
      `);
    } else {
      // API isteği gibi JSON döner
      res.status(200).json({ count });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
