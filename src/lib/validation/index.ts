import { z } from "zod";

export const SignupValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 3 characters" })
    .max(50),
  username: z
    .string()
    .min(2, { message: "Username must be at least 3 characters" })
    .max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50),
});

export const SigninValidationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50),
});
