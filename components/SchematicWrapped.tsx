import { useUser } from "@clerk/nextjs";
import { useSchematicEvents } from "@schematichq/schematic-react";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const SchematicWrapped = (props: Props) => {
  const { identify } = useSchematicEvents();

  const { user } = useUser();

  useEffect(() => {
    const userName =
      user?.username ??
      user?.fullName ??
      user?.emailAddresses[0].emailAddress ??
      user?.id;

    if (user?.id) {
      identify({
        company: {
          keys: {
            id: user.id,
          },
          name: userName,
        },

        keys: {
          id: user.id,
        },
        name: userName,
      });
    }
  }, [user, identify]);

  return props.children;
};

export default SchematicWrapped;
