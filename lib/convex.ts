import { ConvexReactClient } from "convex/react";

export const getConvexClient = () => {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
  }

  return new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
};
