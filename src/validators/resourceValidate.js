import { z } from "zod";

const validateResource = z.object({
  moduleId: z.string().min(1, "Module ID is required"),

  title: z.string().trim().min(1, "Title is required"),

  type: z.string().trim().min(1, "Resource type is required"),

  url: z.string().trim().nullable().optional(),

  fileReference: z.string().trim().nullable().optional(),

  description: z.string().trim().optional(),

  originalFilename: z.string().trim().nullable().optional(),

  fileSize: z
    .number()
    .min(0, "File size cannot be negative")
    .nullable()
    .optional(),

  estimatedDuration: z
    .number()
    .min(0, "Estimated duration cannot be negative")
    .nullable()
    .optional(),

  order: z.number().int().min(1, "Order must be at least 1"),
});

export default validateResource;
