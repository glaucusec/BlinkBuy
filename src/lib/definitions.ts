import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z
      .string({ message: "" })
      .email({
        message:
          "Invalid email provided. Please provide a valid email address.",
      })
      .trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[a-zA-Z]/, {
        message: "Password must contain at least one letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character.",
      })
      .trim(),
    password2: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match.",
    path: ["password2"],
  });

export const LoginSchema = z.object({
  email: z.string({ message: "" }).email({
    message: "Invalid email provided. Please provide a valid email address.",
  }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must have at least 8 characters long." }),
});
