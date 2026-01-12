import { getAllMusic } from "../Models/music.model.js";

export async function fetchMusic() {
  try {
    const music = await getAllMusic();
    return { music, error: null };
  } catch (error) {
    return { music: [], error: error.message };
  }
}
