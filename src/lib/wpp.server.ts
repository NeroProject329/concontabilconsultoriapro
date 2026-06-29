import { promises as fs } from "node:fs";
import path from "node:path";

export type Attendant = {
  id: string;
  name: string;
  number: string; // só dígitos (ex: 5511999999999)
  active: boolean;
};

export type WppConfig = {
  attendants: Attendant[];
  rotationStep: number; // a cada X cliques, troca de atendente
  clickCounter: number;
  cursor: number; // índice atual no array de ativos
  message: string;
};

const DEFAULT_CONFIG: WppConfig = {
  attendants: [],
  rotationStep: 1,
  clickCounter: 0,
  cursor: 0,
  message: "Olá! Quero saber mais sobre a consultoria.",
};

const FILE_PATH = path.join("/tmp", "wpp-config.json");

// cache em memória — fallback quando o FS não persiste (ex: edge)
let memory: WppConfig | null = null;

export async function readConfig(): Promise<WppConfig> {
  if (memory) return memory;
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    memory = { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
    return memory!;
  } catch {
    memory = { ...DEFAULT_CONFIG };
    return memory;
  }
}

export async function writeConfig(cfg: WppConfig): Promise<void> {
  memory = cfg;
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(cfg, null, 2), "utf-8");
  } catch {
    // ignora — mantém em memória
  }
}

export const ADMIN_EMAIL = "admin@admin";
export const ADMIN_PASSWORD = "123456";
