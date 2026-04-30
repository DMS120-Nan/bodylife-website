import { NextResponse } from "next/server";
import { getRegion } from "../../../lib/regions";

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

export async function POST(request) {
  try {
    const body = await request.json();
    const { country, email, message, name, phone, region, source_page } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!getRegion(region)) {
      return NextResponse.json(
        { error: "Invalid region." },
        { status: 400 }
      );
    }

    if (!MAKE_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Lead capture is not configured yet." },
        { status: 503 }
      );
    }

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        country,
        email,
        message,
        name,
        phone,
        region,
        source_page,
        submitted_at: new Date().toISOString()
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to submit lead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit lead." },
      { status: 500 }
    );
  }
}
