import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import pool from "@/lib/db";
import { ChatMessage } from "@/lib/types";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const REJECT_KEYWORDS = ["broker", "distributor", "aracı", "distribütör", "toptancı", "komisyoncu"];

const SYSTEM_PROMPT_TR = `Sen TONLA MALZEME ENDÜSTRİYEL HAMMADDE TİCARET LTD. ŞTİ'nin dijital asistanısın. Adın TONLA Asistan.

TONLA Hakkında:
- Kapıdan kapıya endüstriyel hammadde tedarik hizmeti sunuyoruz
- Sadece üretici firmalarla çalışıyoruz (aracılar, distribütörler ile çalışmıyoruz)
- Aylık tedarik zinciri yönetimi yapıyoruz
- Güvenilir, zamanında teslimat garantisi veriyoruz

Sohbet Akışı (bu sırayla sorularını sor):
1. İlk olarak: "Üretici misiniz yoksa tüccar mısınız?" diye sor.
   - Eğer tüccar, broker, aracı, distribütör, toptancı veya komisyoncu ise → kibarca sadece üretici firmalarla çalıştığınızı açıkla ve nazikçe reddet.
   - Eğer üretici ise → devam et.
2. "Ne üretiyorsunuz?" diye sor.
3. "Hangi hammaddelere ihtiyacınız var?" diye sor.
4. "Özel bir formül mü arıyorsunuz yoksa genel amaçlı bileşikler mi?" diye sor.
5. Cevaplarına göre doğal takip soruları sor (firma adı, hacim, iletişim bilgileri vb.)

Kurallar:
- Her zaman Türkçe konuş (müşteri İngilizce yazarsa İngilizce cevap ver)
- Kısa ve öz cevaplar ver
- Profesyonel ama samimi ol
- Asla fiyat verme, sadece bilgi topla
- Müşteriye sorularını tek tek sor, hepsini bir anda sorma
- Sohbete doğrudan soruyla başla, uzun açıklama yapma`;

const SYSTEM_PROMPT_EN = `You are the digital assistant of TONLA MALZEME ENDÜSTRİYEL HAMMADDE TİCARET LTD. ŞTİ. Your name is TONLA Assistant.

About TONLA:
- We provide door-to-door industrial raw material supply services
- We only work with manufacturing companies (not brokers or distributors)
- We manage monthly supply chains
- We guarantee reliable, on-time delivery

Conversation Flow (ask these questions in order):
1. First ask: "Are you a manufacturer or a trader?"
   - If trader, broker, distributor, or middleman → politely explain you only work with manufacturers and decline.
   - If manufacturer → continue.
2. Ask: "What do you manufacture?"
3. Ask: "What raw materials do you need?"
4. Ask: "Are you looking for something specific or general purpose compounds?"
5. Ask natural follow-up questions based on their answers (company name, volume, contact info, etc.)

Rules:
- Always respond in English
- Keep answers short and concise
- Be professional but friendly
- Never quote prices, only gather information
- Ask questions one at a time, not all at once
- Start the conversation directly with questions, avoid long explanations`;

function detectRejection(messages: ChatMessage[]): string | null {
  const allText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content.toLowerCase())
    .join(" ");

  for (const keyword of REJECT_KEYWORDS) {
    if (allText.includes(keyword)) {
      return keyword;
    }
  }
  return null;
}

function extractInfo(messages: ChatMessage[]): {
  company_name: string | null;
  industry: string | null;
  monthly_volume: string | null;
  contact_info: string | null;
} {
  const allText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content)
    .join(" ");

  const emailMatch = allText.match(/[\w.-]+@[\w.-]+\.\w+/);
  const phoneMatch = allText.match(/[\+]?[\d\s\-\(\)]{7,}/);

  return {
    company_name: null,
    industry: null,
    monthly_volume: null,
    contact_info: emailMatch?.[0] || phoneMatch?.[0] || null,
  };
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId, lang } = await request.json();

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: "Message and sessionId are required" },
        { status: 400 }
      );
    }

    const systemPrompt = lang === "en" ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_TR;

    const existing = await pool.query(
      "SELECT * FROM tonla_conversations WHERE session_id = $1",
      [sessionId]
    );

    let messages: ChatMessage[] = [];
    if (existing.rows.length > 0) {
      messages = existing.rows[0].messages;
    }

    messages.push({ role: "user", content: message });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    messages.push({ role: "assistant", content: assistantMessage });

    const rejectedKeyword = detectRejection(messages);
    const extractedInfo = extractInfo(messages);

    const isQualified =
      !rejectedKeyword &&
      messages.filter((m) => m.role === "user").length >= 3;

    if (existing.rows.length > 0) {
      await pool.query(
        `UPDATE tonla_conversations 
         SET messages = $1, is_qualified = $2, company_name = COALESCE($3, company_name), 
             industry = COALESCE($4, industry), monthly_volume = COALESCE($5, monthly_volume),
             contact_info = COALESCE($6, contact_info), rejected_reason = $7, updated_at = NOW()
         WHERE session_id = $8`,
        [
          JSON.stringify(messages),
          rejectedKeyword ? false : isQualified,
          extractedInfo.company_name,
          extractedInfo.industry,
          extractedInfo.monthly_volume,
          extractedInfo.contact_info,
          rejectedKeyword || null,
          sessionId,
        ]
      );
    } else {
      await pool.query(
        `INSERT INTO tonla_conversations (session_id, messages, is_qualified, company_name, industry, monthly_volume, contact_info, rejected_reason)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          sessionId,
          JSON.stringify(messages),
          rejectedKeyword ? false : isQualified,
          extractedInfo.company_name,
          extractedInfo.industry,
          extractedInfo.monthly_volume,
          extractedInfo.contact_info,
          rejectedKeyword || null,
        ]
      );
    }

    return NextResponse.json({
      message: assistantMessage,
      isRejected: !!rejectedKeyword,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
