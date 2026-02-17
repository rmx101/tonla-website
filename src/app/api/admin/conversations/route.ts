import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const authCookie = request.cookies.get("admin_auth");
    if (!authCookie || authCookie.value !== "authenticated") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const filter = request.nextUrl.searchParams.get("filter");

    let query = "SELECT * FROM tonla_conversations ORDER BY updated_at DESC";
    const params: (string | boolean)[] = [];

    if (filter === "qualified") {
      query =
        "SELECT * FROM tonla_conversations WHERE is_qualified = true AND rejected_reason IS NULL ORDER BY updated_at DESC";
    } else if (filter === "rejected") {
      query =
        "SELECT * FROM tonla_conversations WHERE rejected_reason IS NOT NULL ORDER BY updated_at DESC";
    } else if (filter === "in_progress") {
      query =
        "SELECT * FROM tonla_conversations WHERE is_qualified = false AND rejected_reason IS NULL ORDER BY updated_at DESC";
    }

    const result = await pool.query(query, params);

    return NextResponse.json({ conversations: result.rows });
  } catch (error) {
    console.error("Admin conversations error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
