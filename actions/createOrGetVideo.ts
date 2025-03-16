"use server";

import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { FeatureFlag } from "@/features/flags";
import { checkUsageLimit } from "@/lib/checkUsageLimit";
import { getConvexClient } from "@/lib/convex";
import { currentUser } from "@clerk/nextjs/server";

export interface CreateOrGetVideoResponse {
  success: boolean;
  data?: Doc<"videos"> | null;
  error?: string | null;
}

export async function createOrGetVideo(
  videoId: string,
  userId: string
): Promise<CreateOrGetVideoResponse> {
  const convex = getConvexClient();

  const user = await currentUser();

  if (!user) {
    return {
      success: false,
      error: "User not found",
    };
  }

  const featureUsage = await checkUsageLimit(
    user.id,
    FeatureFlag.ANALYSE_VIDEO
  );

  if (!featureUsage) {
    return {
      success: false,
      error: "Failed to check usage limit",
    };
  }

  if (!featureUsage.success) {
    return {
      success: false,
      error: featureUsage.error,
    };
  }

  try {
    const existingVideo = await convex.query(api.videos.getVideoByVideoId, {
      videoId,
      userId,
    });
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }

  // Add default return to satisfy TypeScript
  return {
    success: true,
    data: null,
  };
}
