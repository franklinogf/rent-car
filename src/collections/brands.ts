import { CollectionConfig } from "payload/types";

export const Brands: CollectionConfig = {
  slug: "brands",
  admin: {
    useAsTitle: "name",
    disableDuplicate: true,
  },

  fields: [
    {
      label: "Brand of car",
      name: "name",
      type: "text",
      unique: true,
      required: true,
      admin: {
        width: "30%",
      },
    },
  ],
};
