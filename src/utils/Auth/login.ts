import * as yup from "yup";

export const AuthLoginInitialValues = {
  username: "",
  password: "",
}

export const AuthLoginValidationSchema = yup.object({
  username: yup.string().required("Required!").min(5, "Minimum 5 characters!"),
  password: yup.string().required("Required!").min(8, "Minimum 8 characters!"),
});
