import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { webhookUrl, message, botName, avatarUrl, tts } = body;

  try {
    const payload = {
      content: message,
      username: botName || undefined,
      avatar_url: avatarUrl || undefined,
      tts: tts || false,
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
