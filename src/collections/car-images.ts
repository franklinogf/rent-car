import { CollectionConfig } from "payload/types";

export const CarImages: CollectionConfig = {
  slug: "car-images",
  admin: {
    disableDuplicate: true,
  },
  upload: {
    staticURL: "/cars",
    staticDir: "cars",
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
  },

  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};