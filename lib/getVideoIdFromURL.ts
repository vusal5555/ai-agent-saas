export const getVideoIdFromURL = (url: string): string | null => {
  let videoId: string | null = null;

  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0] || null;
  } else if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("/shorts")[1]?.split(/[?#]/)[0] || null;
  } else if (url.includes("v=")) {
    videoId = url.split("v=")[1]?.split("&")[0] || null;
  }

  return videoId;
};
