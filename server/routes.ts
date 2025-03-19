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
      
      await StorageService.init();
      const photoUrl = await StorageService.savePhoto(address, photoData);
      
      res.json({ success: true, url: photoUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update photo" });
    }
  });

  app.use(router);

  const httpServer = createServer(app);
  return httpServer;
}