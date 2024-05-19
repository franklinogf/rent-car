import { CollectionConfig } from "payload/types";

export const Brands: CollectionConfig = {
  slug: "brands",
  admin: {
    useAsTitle: "name",
  },

  fields: [
    {
      label: "Brand of car",
      name: "name",
      type: "text",
      unique: true,
      admin: {
        width: "30%",
      },
    },
  ],
};
