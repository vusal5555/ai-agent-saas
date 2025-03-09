"use server";

import { currentUser } from "@clerk/nextjs/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;

if (!apiKey) {
  throw new Error("SCHEMATIC_API_KEY is not set");
}

const client = new SchematicClient({
  apiKey,
});

export const getTemporaryAccessToken = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  const response = await client.accesstokens.issueTemporaryAccessToken({
    resourceType: "company",
    lookup: {
      id: user.id,
    },
  });

  return response.data.token;
};
