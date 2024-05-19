import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { viteBundler } from "@payloadcms/bundler-vite";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import dotenv from "dotenv";
import { Cars } from "./collections/cars";
import { Types } from "./collections/types";
import { Brands } from "./collections/brands";
import { CarImages } from "./collections/car-images";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Cars, Types, Brands, CarImages],
  admin: {
    bundler: viteBundler(),
    meta: {
      titleSuffix: "- Rent Car",
    },
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL!,
  }),
  editor: slateEditor({}),
  rateLimit: {
    max: 2000,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },

  // By default, Payload will boot up normally
  // and you will be provided with a base `User` collection.
  // But, here is where you define how you'd like Payload to work!
});
