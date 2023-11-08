import * as yup from "yup";

export const AuthRegisterInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

export const AuthRegisterValidationSchema = yup.object({
  firstName: yup.string().required("Required!").min(3, "Minimum 3 characters!"),
  lastName: yup.string().required("Required!").min(3, "Minimum 3 characters!"),
  email: yup.string().required("Required!").email('Email not valid!'),
  password: yup.string().required("Required!").min(8, "Minimum 8 characters!"),
});
