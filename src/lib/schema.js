import { z } from "zod";

export const UserSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(8, "Password must be 8 characters")
      .regex(/\d/, "Password must contain at least one number")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    petName: z.string().min(1, "Please enter your pet's name"),
    petWeight: z.coerce
      .number({
        invalid_type_error: "Please enter your pet's weight as a number",
      })
      .min(3, "Your pet's weight must be at least 3 lbs")
      .max(180, "Your pet's weight must be less than 180 lbs"),
    petIdealWeight: z.coerce.number({
      invalid_type_error: "Please enter your pet's ideal weight as a number",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) =>
      !data.petIdealWeight ||
      (data.petIdealWeight >= 3 && data.petIdealWeight <= 180),
    {
      message: "Your pet's ideal weight should be between 3-180 lbs",
      path: ["petIdealWeight"],
    }
  );
