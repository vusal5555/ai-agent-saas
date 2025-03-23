import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// Store a new image URL for a video
export const storeImage = mutation({
  args: {
    storageId: v.id("_storage"),
    videoId: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    // Store the image URL in the database
    const imageId = await ctx.db.insert("images", {
      storgaId: args.storageId,
      videoId: args.videoId,
      userId: args.userId,
    });

    return imageId;
  },
});

// Get images for a specific user and video combination
export const getImage = query({
  args: {
    userId: v.string(),
    videoId: v.string(),
  },
  handler: async (ctx, args) => {
    const image = await ctx.db
      .query("images")
      .withIndex("by_user_and_video_id")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .filter((q) => q.eq(q.field("videoId"), args.videoId))
      .first();

    if (!image) {
      return null;
    }

    return await ctx.storage.getUrl(image.storgaId);
  },
});
