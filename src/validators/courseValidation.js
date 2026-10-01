import { positive, z } from "zod";

const validateCourse = z.object({
  title: z.string().trim().min(1, "title is required"),

  shortDescription: z.string().trim().min(1, "Short description is required"),

  description: z.string().trim().min(1, "Description is required"),

  objectives: z.array(z.string().trim()).default([]),

  prerequisites: z.array(z.string().trim()).default([]),

  level: z.string().trim().min(1, "Level is required"),

  category: z.string().trim().min(1, "Category is required"),

  estimatedDuration: z
    .number()
    .positive()
    .min(0, "Estimated duration cannot be negative"),

  status: z.enum(["draft", "published"]).default("draft"),

  trainerId: z.string().min(1, "Trainer ID is required"),

  publishedAt: z.date().nullable().optional(),
});

export default validateCourse
