import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId is required" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "SELECT messages, company_name FROM tonla_conversations WHERE session_id = $1",
      [sessionId]
    );

    if (result.rows.length > 0) {
      return NextResponse.json({
        messages: result.rows[0].messages,
        companyName: result.rows[0].company_name,
      });
    }

    return NextResponse.json({ messages: [], companyName: null });
  } catch (error) {
    console.error("Chat history error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
