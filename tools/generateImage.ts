import { dalleImageGeneration } from "@/actions/dalleImageGeneration";
import { FeatureFlag } from "@/features/flags";
import { client } from "@/lib/schematic";
import { tool } from "ai";
import { z } from "zod";

export const generateImage = (videoId: string, userId: string) =>
  tool({
    description: "Generate a thumbnail for a video",
    parameters: z.object({
      videoId: z.string().describe("The video id to generate an image for"),
      prompt: z.string().describe("The prompt to generate an image for"),
    }),
    execute: async ({ prompt }) => {
      const schematicCtx = {
        company: { id: userId },
        user: {
          id: userId,
        },
      };

      const isImageGenerationEnabled = await client.checkFlag(
        schematicCtx,
        FeatureFlag.IMAGE_GENERATION
      );

      if (!isImageGenerationEnabled) {
        return {
          error: "Image generation is not enabled, the user must upgrade",
        };
      }

      const image = await dalleImageGeneration(prompt, videoId);
      return { image };
    },
  });
