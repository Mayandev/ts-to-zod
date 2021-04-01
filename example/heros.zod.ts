// Generated by ts-to-zod
import { z } from "zod";
import { Vilain } from "./heros";

export const ennemySchema = z.object({
  name: z.string(),
  powers: z.array(z.string()),
  inPrison: z.boolean(),
});

export const supermanSchema = z.object({
  name: z.union([
    z.literal("superman"),
    z.literal("clark kent"),
    z.literal("kal-l"),
  ]),
  ennemies: z.record(ennemySchema),
  age: z.number(),
  underKryptonite: z.boolean().optional(),
});

export const vilainSchema: z.ZodSchema<Vilain> = z.lazy(() =>
  z.object({
    name: z.string(),
    powers: z.array(z.string()),
    friends: z.array(vilainSchema),
  })
);
