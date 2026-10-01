import { z } from "zod";

const validateModule = z.object({
  courseId: z.string().min(1, "Course ID is required"),

  title: z.string().trim().min(1, "Title is required"),

  description: z.string().trim().min(1, "Description is required"),

  order: z.number().int().min(1, "Order must be at least 1"),

  estimatedDuration: z.number().min(0, "Estimated duration cannot be negative"),

  status: z.enum(["draft", "published"]).default("draft"),
});

export default validateModule;
