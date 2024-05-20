import type { CollectionConfig } from "payload/types";
import slugify from "slugify";

export const Cars: CollectionConfig = {
  slug: "cars",
  admin: {
    useAsTitle: "model",
    preview: (doc) => {
      if (doc?.slug) {
        return `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${doc.slug}`;
      }
      return null;
    },
    disableDuplicate: true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "brand",
          type: "relationship",
          relationTo: "brands",
          required: true,
        },
        {
          name: "type",
          type: "relationship",
          relationTo: "types",
          required: true,
        },
      ],
    },
    {
      name: "model",
      type: "text",
      required: true,
      admin: {
        width: "30%",
      },
    },
    {
      name: "price",
      type: "number",
      min: 10,
      required: true,
      admin: {
        width: "30%",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        width: "70%",
      },
    },
    {
      name: "features",
      type: "group",
      fields: [
        {
          name: "gear",
          type: "radio",
          options: [
            {
              label: "Automatic",
              value: "Automatic",
            },
            {
              label: "Manual",
              value: "Manual",
            },
          ],
          required: true,
        },
        {
          label: "Amount of persons that fit",
          name: "persons",
          min: 1,
          type: "number",
          required: true,
          admin: {
            width: "30%",
          },
        },
        {
          label: "Fuel consumption",
          name: "fuel",
          min: 1,
          type: "number",
          admin: {
            width: "30%",
          },
        },
      ],
    },
    {
      type: "upload",
      name: "image",
      relationTo: "car-images",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      unique: true,
      access: {
        update: () => false,
      },
      admin: {
        position: "sidebar",
        description:
          "Created automatically (can be modified but can't be updated)",
      },
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (operation === "create") {
              return slugify(data?.model, { lower: true, trim: true });
            }
          },
        ],
      },
    },
  ],
};
