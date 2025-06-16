// lib/zod/userSignUpSchema.js (ou .ts)
import { z } from "zod";

export const userSignUpSchema = z.object({
  userName: z
    .string()
    .nonempty({ message: "The username cannot be empty" })
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(50, { message: "Username cannot be longer than 50 characters." }),
  userEmail: z
    .string()
    .nonempty({ message: "The email cannot be empty" })
    .email({ message: "Invalid email format. Please enter a valid email." })
    .min(5, { message: "Email must have at least 5 characters." })
    .max(255, { message: "Email cannot be longer than 255 characters." })
    .toLowerCase(),
  userAge: z
    .number()
    .int({ message: "Age must be an integer." })
    .min(18, "You must be at least 18 years old to register.")
    .max(120, "Invalid age."),
  userPswd: z
    .string()
    .nonempty({ message: "The passowrd cannot be empty." })
    .min(8, { message: "Password must be at least 8 characters." })
    .max(100, { message: "Password cannot be longer than 100 characters." }),
  userMobilePhone: z
    .string()
    .nonempty({ message: "The number phone cannot be empty." })
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, {
      message: "Invalid number format",
    })
    .trim(),
});
