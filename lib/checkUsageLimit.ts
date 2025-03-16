import { featureFlagEvents } from "@/features/flags";
import { client } from "./schematic";

export async function checkUsageLimit(userId: string, eventSubType: string) {
  try {
    const entitlement = await client.entitlements.getFeatureUsageByCompany({
      keys: {
        id: userId,
      },
    });

    const feature = entitlement.data.features.find(
      (entitlement) => entitlement.feature?.eventSubtype === eventSubType
    );

    if (!feature) {
      return {
        success: false,
        error:
          "This feature is not available on your current plan, please upgrade to the pro plan to use this feature",
      };
    }

    const { usage, allocation } = feature;

    if (usage === undefined || allocation === undefined) {
      return {
        success: false,
        error: "System error, please try again later",
      };
    }

    const hasExceededUsageLimit = usage >= allocation;

    if (hasExceededUsageLimit) {
      // Find the display-friendly feature name
      const featureName =
        Object.entries(featureFlagEvents).find(
          ([, value]) => value.event === eventSubType
        )?.[0] || eventSubType;

      return {
        success: false,
        error: `You have reached your ${featureName} limit. Please upgrade your plan to continue using this feature.`,
      };
    }

    return { success: true, feature };
  } catch (error) {
    console.error(error);
  }
}
