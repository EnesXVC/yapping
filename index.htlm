import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('count.js')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return <p>Loading...</p>;

  return <p>{count}</p>;
}
