import { object, string, TypeFromShape } from "yup";

export const signupSchema = object({
  email: string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  password: string()
    .required("Password is required")
    .min(8, "Password should have a minimum of 8 characters")
    .matches(/\d/, "Password should have at least one number")
    .matches(/[A-Z]/, "Password should have at least one uppercase letter")
    .matches(/[a-z]/, "Password should have at least one lowercase letter"),
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  interests: string().required("Intereset is required."),
});
