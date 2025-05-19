import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>XVC Hub Global Usage</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {count} people using XVC Hub globally
      </p>
    </div>
  );
}
