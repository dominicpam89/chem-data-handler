import * as yup from "yup";

export const AuthRegisterInitialValues = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
}

export const AuthRegisterValidationSchema = yup.object({
  firstName: yup.string().required("Required!").min(3, "Minimum 3 characters!"),
  lastName: yup.string().required("Required!").min(3, "Minimum 3 characters!"),
  username: yup.string().required("Required!").min(5, "Minimum 5 characters!"),
  password: yup.string().required("Required!").min(8, "Minimum 8 characters!"),
});
