"use client";

import { SchematicEmbed as SchematicEmbedComponent } from "@schematichq/schematic-components";

const SchematicEmbedd = ({
  accessToken,
  componentId,
}: {
  accessToken: string;
  componentId: string;
}) => {
  return <SchematicEmbedComponent accessToken={accessToken} id={componentId} />;
};

export default SchematicEmbedd;
