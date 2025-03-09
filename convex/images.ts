import { v } from "convex/values";
import { query } from "./_generated/server";

export const generateImages = query({
  args: {
    videoId: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const { videoId, userId } = args;

    const images = await ctx.db
      .query("images")
      .withIndex("by_user_and_video_id")
      .filter((q) => q.eq(q.field("userId"), userId))
      .filter((q) => q.eq(q.field("videoId"), videoId))
      .collect();

    const imageUrls = await Promise.all(
      images.map(async (image) => ({
        ...image,
        url: await ctx.storage.getUrl(image.storgaId),
      }))
    );

    return imageUrls;
  },
});
