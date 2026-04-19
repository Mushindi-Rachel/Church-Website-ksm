import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const event_id = searchParams.get("event_id");

  if (!event_id) {
    return Response.json([]);
  }

  const { data, error } = await supabase
    .from("event_gallery")
    .select("*")
    .eq("event_id", event_id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}