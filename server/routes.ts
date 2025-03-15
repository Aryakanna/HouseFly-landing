import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import express from "express";
import { writeFile } from "fs/promises";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const existingEntry = await storage.getWaitlistByEmail(data.email);

      if (existingEntry) {
        return res.status(409).json({ 
          message: "This email is already on the waitlist" 
        });
      }

      const entry = await storage.createWaitlistEntry(data);
      await addEmailToSheet(data.email);
      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: error.errors[0].message 
        });
      }
      throw error;
    }
  });

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

  app.use(router); //Use the router to handle the new endpoint


  const httpServer = createServer(app);
  return httpServer;
}