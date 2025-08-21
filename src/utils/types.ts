import z from "zod";

export const schema = z.object({
  name: z.string().min(1, "Name is required").refine((value) => /^[A-Z]/.test(value), {
    message: "Name must start with a capital letter",
  }),
  age: z.coerce.number().nonnegative("Age must be a positive number"),
  email: z.email("Invalid email format"),
  password: z
    .string()
    .refine(
      (value) =>
        /[A-Z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[!@#$%^&*]/.test(value) &&
        /[a-z]/.test(value),
      {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }
    )
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string(),
  gender: z.enum(["male", "female", "unspecified"]),
  terms: z.boolean().optional(),
  uploadImage: z.instanceof(File).optional().or(z.instanceof(FileList).optional()).or(z.string().optional()),
  country: z.string().min(2, "Country must be selected"),
}).refine((values) => values.password === values.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type IForm = {
    name: string;
    age: unknown | number;
    email: string;
    password: string;
    confirmPassword: string;
    gender: "male" | "female" | "unspecified";
    terms?: boolean;
    uploadImage?: string | File | FileList;
    country: string;
}