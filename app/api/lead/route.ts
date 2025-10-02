import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/libs/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          email: body.email,
          name: body.name || null,
          message: body.message || null,
        },
      ])
      .select()
      .maybeSingle();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ message: "Email already registered" });
      }
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
