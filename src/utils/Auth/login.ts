import * as yup from "yup";

export const AuthLoginInitialValues = {
  email: "",
  password: "",
}

export const AuthLoginValidationSchema = yup.object({
  email: yup.string().required("Required!").email('Email not valid!'),
  password: yup.string().required("Required!").min(8, "Minimum 8 characters!"),
});
