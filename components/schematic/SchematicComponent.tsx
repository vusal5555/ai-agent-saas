import React from "react";
import SchematicEmbedd from "./SchematicEmbedd";
import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken";

const SchematicComponent = async ({ componentId }: { componentId: string }) => {
  if (!componentId) {
    return null;
  }

  const accessToken = await getTemporaryAccessToken();

  if (!accessToken) {
    return null;
  }

  return (
    <SchematicEmbedd accessToken={accessToken} componentId={componentId} />
  );
};

export default SchematicComponent;
