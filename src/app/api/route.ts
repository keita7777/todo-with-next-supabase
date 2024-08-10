import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest } from "next";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const { data, error } = await supabase.from("todos").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request, res: Response) {
  const { id, text } = await req.json();

  const { data, error } = await supabase.from("todos").insert([
    {
      id,
      text,
      created_at: new Date().toDateString(),
      status: {
        id: "notstarted",
        name: "未着手",
      },
    },
  ]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: Response) {
  const body = await req.json();
  const { id } = body;

  const { data, error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}
