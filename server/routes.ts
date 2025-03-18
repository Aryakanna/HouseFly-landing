import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import { writeFile } from "fs/promises";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  const router = express.Router();
  router.post("/api/properties/:address/photo", async (req, res) => {
    try {
      const { address } = req.params;
      const { photoData } = req.body;

      const sanitizedAddress = address.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
      const photoPath = path.join(__dirname, "../storage/photos", `${sanitizedAddress}.jpg`);

      // Convert base64 to buffer and save
      const buffer = Buffer.from(photoData.split(',')[1], 'base64');
      await writeFile(photoPath, buffer);

      res.json({ success: true, path: photoPath });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update photo" });
    }
  });

  app.use(router);

  const httpServer = createServer(app);
  return httpServer;
}