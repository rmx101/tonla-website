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

Görevin:
1. Müşteriyi sıcak ve profesyonel bir şekilde karşıla
2. TONLA'nın hizmetlerini kısaca anlat
3. Doğal bir sohbet akışı içinde şu bilgileri öğren:
   - Firma adı
   - Sektör / ürettikleri ürün
   - Aylık hammadde ihtiyacı (hacim/miktar)
   - İletişim bilgileri (telefon veya e-posta)
4. Eğer müşteri "broker", "distribütör", "aracı", "toptancı" veya "komisyoncu" olduğunu belirtirse, kibarca sadece üretici firmalarla çalıştığınızı açıkla ve nazikçe reddet.
5. Eğer müşteri bir üretici firma ise ve net hacim ihtiyacı varsa, bilgileri kaydet.

Kurallar:
- Her zaman Türkçe konuş (müşteri İngilizce yazarsa İngilizce cevap ver)
- Kısa ve öz cevaplar ver
- Profesyonel ama samimi ol
- Asla fiyat verme, sadece bilgi topla
- Müşteriye sorularını tek tek sor, hepsini bir anda sorma`;

const SYSTEM_PROMPT_EN = `You are the digital assistant of TONLA MALZEME ENDÜSTRİYEL HAMMADDE TİCARET LTD. ŞTİ. Your name is TONLA Assistant.

About TONLA:
- We provide door-to-door industrial raw material supply services
- We only work with manufacturing companies (not brokers or distributors)
- We manage monthly supply chains
- We guarantee reliable, on-time delivery

Your Tasks:
1. Greet the customer warmly and professionally
2. Briefly explain TONLA's services
3. Naturally gather the following information through conversation:
   - Company name
   - Industry / products they manufacture
   - Monthly raw material needs (volume/quantity)
   - Contact information (phone or email)
4. If the customer mentions being a "broker", "distributor", or middleman, politely explain that you only work with manufacturers and decline.
5. If the customer is a manufacturer with clear volume needs, save their information.

Rules:
- Always respond in English
- Keep answers short and concise
- Be professional but friendly
- Never quote prices, only gather information
- Ask questions one at a time, not all at once`;

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
