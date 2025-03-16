"use client";

import { SchematicProvider } from "@schematichq/schematic-react";
import React from "react";
import SchematicWrapped from "./SchematicWrapped";
import ConvexClientProvider from "./ConvexClientProvider";

type Props = {
  children: React.ReactNode;
};

const ClientWrapper = (props: Props) => {
  const schematicPublishableKey =
    process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;

  if (!schematicPublishableKey) {
    throw new Error("NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY is not set");
  }

  return (
    <ConvexClientProvider>
      <SchematicProvider publishableKey={schematicPublishableKey}>
        <SchematicWrapped>{props.children}</SchematicWrapped>
      </SchematicProvider>
    </ConvexClientProvider>
  );
};

export default ClientWrapper;
