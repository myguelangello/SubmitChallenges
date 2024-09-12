import * as dotenv from "dotenv";
import { z } from 'zod'

dotenv.config({ path: "./.env" });

const envSchema = z.object({
  /*   DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'), */
  PORT: z.coerce.number().default(3333),
})

export const env = envSchema.parse(process.env)