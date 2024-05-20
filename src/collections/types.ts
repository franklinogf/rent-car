import { CollectionConfig } from "payload/types";

export const Types: CollectionConfig = {
  slug: "types",
  admin: {
    useAsTitle: "name",
    description: "Types for the cars",
    disableDuplicate: true,
  },
  fields: [
    {
      label: "Type of car",
      name: "name",
      type: "text",
      required: true,
      unique: true,
      admin: {
        width: "30%",
      },
    },
  ],
};
