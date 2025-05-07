import { useState } from 'react';

export default function Home() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [message, setMessage] = useState('');
  const [botName, setBotName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [tts, setTTS] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startSpam = () => {
    if (!webhookUrl || !message) return alert('Webhook URL ve mesaj boş olamaz');
    const id = setInterval(() => {
      fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl, message, botName, avatarUrl, tts }),
      });
    }, delay);
    setIntervalId(id);
  };

  const stopSpam = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  };

  const deleteWebhook = async () => {
    try {
      await fetch(webhookUrl, { method: 'DELETE' });
      alert('Webhook silindi.');
    } catch {
      alert('Webhook silinemedi.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Webhook Spammer</h1>
      <input className="input" placeholder="Webhook URL" value={webhookUrl} onChange={e => setWebhookUrl(e.target.value)} />
      <textarea className="input" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      <input className="input" placeholder="Bot Name (Optional)" value={botName} onChange={e => setBotName(e.target.value)} />
      <input className="input" placeholder="Avatar URL (Optional)" value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)} />
      <label className="my-2 flex items-center">
        <input type="checkbox" checked={tts} onChange={() => setTTS(!tts)} className="mr-2" /> TTS
      </label>
      <input className="input" type="number" value={delay} onChange={e => setDelay(Number(e.target.value))} placeholder="Delay (ms)" />

      <div className="flex gap-4 mt-4">
        {!intervalId ? (
          <button className="btn bg-green-600" onClick={startSpam}>Start Spam</button>
        ) : (
          <button className="btn bg-yellow-600" onClick={stopSpam}>Stop Spam</button>
        )}
        <button className="btn bg-red-600" onClick={deleteWebhook}>Delete Webhook</button>
      </div>
    </main>
  );
}
