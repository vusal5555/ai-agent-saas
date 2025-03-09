"use server";

import { redirect } from "next/navigation";
import { getVideoIdFromURL } from "@/lib/getVideoIdFromURL";
export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = getVideoIdFromURL(url);

  if (!videoId) return;

  // Redirect to the new post
  redirect(`/video/${videoId}/analysis`);
}
