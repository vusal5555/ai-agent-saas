import { getYoutubeTranscript } from "@/actions/getYoutubeTranscript";
import { tool } from "ai";
import { z } from "zod";

const fetchTranscript = tool({
  description: "Fetch the transcript of a youtube video in segments",
  parameters: z.object({
    videoId: z.string().describe("The video ID to fetch the transcript for"),
  }),
  execute: async ({ videoId }) => {
    const transcript = await getYoutubeTranscript(videoId);

    if (!transcript) {
      return {
        transcript: [],
        cache: false,
      };
    }

    return {
      transcript: transcript.transcript,
      cache: transcript.cache,
    };
  },
});

export default fetchTranscript;
