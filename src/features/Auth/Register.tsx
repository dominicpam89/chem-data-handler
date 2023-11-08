import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  TextField,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import {
  AuthRegisterValidationSchema,
  AuthRegisterInitialValues,
} from "../../utils/Auth/register";

const AuthRegister = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: AuthRegisterInitialValues,
    validationSchema: AuthRegisterValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <TextField aria-label="input-first-name"
          error={
            formik.errors.firstName && formik.touched.firstName ? true : false
          }
          helperText={formik.errors.firstName || null}
          id="firstName"
          label="First Name"
          {...formik.getFieldProps("firstName")}
        />
        <TextField aria-label="input-last-name"
          error={
            formik.errors.lastName && formik.touched.lastName ? true : false
          }
          helperText={formik.errors.lastName || null}
          id="lastName"
          label="Last Name"
          {...formik.getFieldProps("lastName")}
        />
        <TextField aria-label="input-username"
          error={
            formik.errors.username && formik.touched.username ? true : false
          }
          helperText={formik.errors.username || null}
          id="username"
          label="Username"
          {...formik.getFieldProps("username")}
        />
        <FormControl variant="outlined" aria-label="input-password">
          <InputLabel
            htmlFor="password"
            color={
              formik.errors.password && formik.touched.password
                ? "error"
                : "primary"
            }
          >
            <span className={`${formik.errors.password?'text-danger-500':''}`}>Password</span>
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((ps) => !ps)}
                  onMouseDown={() => setShowPassword((ps) => !ps)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
            error={formik.errors.password && formik.touched.password ? true : false}
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <FormHelperText error id="password-helper-text">
              {formik.errors.password}
            </FormHelperText>
          )}
        </FormControl>
        <div id="button-group" className="flex flex-col space-y-2">
          <button className="p-3 btn-primary" type="submit">
            Submit
          </button>
          <button className="p-3 btn-primary-outlined" type="reset" onClick={formik.handleReset}>Reset</button>
        </div>
        <button id="navigate-register-button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/auth?mode=login");
          }}
          className="w-full rounded-lg font-semibold text-primary-500"
        >
          Already has account?
        </button>
      </form>
    </>
  );
};

export default AuthRegister;
