import express from "express";
import { getPayloadClient } from "./payload/index.ts";
import { nextApp, nextHandler } from "./lib/next-utils.ts";
import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});
const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info("Admin URL " + cms.getAdminURL());
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info("Next.js started");
  });

  app.listen(PORT, async () => {
    payload.logger.info(
      `Next.js app url: ${process.env.NEXT_PUBLIC_SERVER_URL}`
    );
  });
};

start();
