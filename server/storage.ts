import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { users, type User, type InsertUser } from path.join(process.cwd(), "..", "shared", "schema");

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export class StorageService {
  private static STORAGE_DIR = path.join(process.cwd(), "storage");
  private static PHOTOS_DIR = path.join(StorageService.STORAGE_DIR, "photos");

  static async init() {
    await mkdir(StorageService.STORAGE_DIR, { recursive: true });
    await mkdir(StorageService.PHOTOS_DIR, { recursive: true });
  }

  static async savePhoto(filename: string, data: string): Promise<string> {
    const sanitizedName = filename.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    const photoPath = path.join(this.PHOTOS_DIR, `${sanitizedName}.jpg`);
    const buffer = Buffer.from(data.split(',')[1], 'base64');
    await writeFile(photoPath, buffer);
    return `/storage/photos/${sanitizedName}.jpg`;
  }
}

export const storage = new MemStorage();
export const photoStorage = StorageService;