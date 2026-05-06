import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = "8680648094:AAE5SMerTGfNzStFChFEJ2t-fVHBUan9bzE";
const CHAT_ID = "476416311";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const now = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" });

    const message = `🚀 *Новая заявка на subio!*\n\n📧 Email: \`${email}\`\n🕐 Время: ${now}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
