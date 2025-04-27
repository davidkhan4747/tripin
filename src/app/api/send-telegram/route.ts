import { NextResponse } from 'next/server';

// Токен и ID чата
const TELEGRAM_BOT_TOKEN = '7945508274:AAGtl6Dwjc1phTN6HoTFppHvyck9B5o5WEw';
const TELEGRAM_CHAT_ID = '-1002648902355';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone, tourName, type } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Имя обязательно' },
        { status: 400 }
      );
    }

    let telegramMessage = '';

    if (type === 'tour') {
      // Формируем сообщение для заявки на тур
      if (!tourName || !phone) {
        return NextResponse.json(
          { error: 'Название тура и телефон обязательны для заявок на тур' },
          { status: 400 }
        );
      }

      telegramMessage = `🔔 НОВАЯ ЗАЯВКА НА ТУР\n\n` +
        `Тур: ${tourName}\n` +
        `Имя: ${name}\n` +
        `Телефон: ${phone}\n` +
        (email ? `Email: ${email}\n` : '') +
        `\nДата: ${new Date().toLocaleString('ru-RU')}`;
    } else {
      // Формируем сообщение для контактной формы
      if (!email || !message) {
        return NextResponse.json(
          { error: 'Email и сообщение обязательны для контактных запросов' },
          { status: 400 }
        );
      }

      telegramMessage = `📩 НОВОЕ СООБЩЕНИЕ С САЙТА\n\n` +
        `Имя: ${name}\n` +
        `Email: ${email}\n` +
        `Сообщение: ${message}\n` +
        `\nДата: ${new Date().toLocaleString('ru-RU')}`;
    }

    // Отправляем сообщение в Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
      }),
    });

    const telegramResponse = await response.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API Error:', telegramResponse);
      return NextResponse.json(
        { error: 'Не удалось отправить сообщение в Telegram', details: telegramResponse },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
