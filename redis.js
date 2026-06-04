// Alternative Serverless-Optimized approach (HTTP based)
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { Redis } from "@upstash/redis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  throw new Error(
    "Missing Upstash Redis config. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in server/.env."
  );
}

const redis = new Redis({
  url,
  token,
});

export default redis;
