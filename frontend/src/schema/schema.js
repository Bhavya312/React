import { z } from "zod";

const phoneNumberRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const loginSchema = z.object({
  email: z.string().email({
    message: "Please provide valid email",
  }),
  password: z.string().min(9, {
    message:"minimum 9 required in password"
  }),
});

const contactFormSchema = z.object({
  username: z.string().min(3, {
    message: "Name is required",
  }),
  email: z
    .string()
    .email({
      message: "Please provide valid email",
    })
    .min(1, {
      message: "Email is required",
    }),
  phone_number: z
    .string()
    .regex(phoneNumberRegex, {
      message: "Please provide valid phone number",
    })
    .min(6, {
      message: "Phone number is required",
    }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export { loginSchema, contactFormSchema };
