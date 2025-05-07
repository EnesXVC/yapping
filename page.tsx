'use client';

import { useState } from 'react';

export default function Home() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [message, setMessage] = useState('');
  const [botName, setBotName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [tts, setTTS] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [isSpamming, setIsSpamming] = useState(false);
  let interval: NodeJS.Timeout;

  const startSpam = () => {
    if (!webhookUrl || !message) return alert('Webhook URL ve mesaj boş olamaz');
    setIsSpamming(true);

    interval = setInterval(async () => {
      await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          webhookUrl, message, botName, avatarUrl, tts,
        }),
      });
    }, delay);
  };

  const stopSpam = () => {
    setIsSpamming(false);
    clearInterval(interval);
  };

  const deleteWebhook = async () => {
    await fetch(webhookUrl, { method: 'DELETE' });
    alert('Webhook silindi');
  };

  return (
    <main className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Webhook Spammer</h1>

      <input type="text" placeholder="Webhook URL" className="input" value={webhookUrl} onChange={e => setWebhookUrl(e.target.value)} />
      <textarea placeholder="Message" className="input" value={message} onChange={e => setMessage(e.target.value)} />
      <input type="text" placeholder="Bot Name (Optional)" className="input" value={botName} onChange={e => setBotName(e.target.value)} />
      <input type="text" placeholder="Avatar URL (Optional)" className="input" value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)} />
      <label className="flex items-center my-2">
        <input type="checkbox" checked={tts} onChange={() => setTTS(!tts)} className="mr-2" />
        TTS
      </label>
      <input type="number" placeholder="Delay (ms)" className="input" value={delay} onChange={e => setDelay(Number(e.target.value))} />

      <div className="flex gap-4 mt-4">
        {!isSpamming ? (
          <button className="btn bg-green-600" onClick={startSpam}>Start Spam</button>
        ) : (
          <button className="btn bg-yellow-600" onClick={stopSpam}>Stop Spam</button>
        )}
        <button className="btn bg-red-600" onClick={deleteWebhook}>Delete Webhook</button>
      </div>
    </main>
  );
}
