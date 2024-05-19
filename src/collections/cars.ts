import { CollectionConfig } from "payload/types";
import { CollectionAfterChangeHook } from "payload/types";

const afterChangeHook: CollectionAfterChangeHook = async ({ doc, req }) => {
  return { ...doc, slug: `${doc.id}-${doc.model}` };
};

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
  hooks: {
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      label: "Slug (Created automatic)",
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
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
  ],
};
