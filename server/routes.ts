import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";

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

  const httpServer = createServer(app);
  return httpServer;
}
