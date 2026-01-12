import supabase from "../lib/supabaseClient.js"

export async function getAllMusic() {
  const { data, error } = await supabase
    .from("music")
    .select("id, title, cover_img, year_released, release_type")
    .order("year_released");

  if (error) throw error;
  return data;
}
