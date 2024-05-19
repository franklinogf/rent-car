import { CollectionConfig } from "payload/types";

export const Types: CollectionConfig = {
  slug: "types",
  admin: {
    useAsTitle: "name",
    description: "Types for the cars",
  },
  fields: [
    {
      label: "Type of car",
      name: "name",
      type: "text",
      unique: true,
      admin: {
        width: "30%",
      },
    },
  ],
};
