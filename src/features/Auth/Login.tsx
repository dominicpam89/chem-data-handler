import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { AuthLoginInitialValues, AuthLoginValidationSchema } from "../../utils/Auth/login";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: AuthLoginInitialValues,
    validationSchema: AuthLoginValidationSchema,
    onSubmit:values=>{
      console.log(values);
    }
  });
  const navigate = useNavigate();
  return (
    <>
      <form
        className="flex flex-col space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <TextField aria-label="input-username"
          fullWidth
          id="username"
          label="username"
          error={
            formik.errors.username && formik.touched.username ? true : false
          }
          helperText={formik.errors.username || null}
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

        <div className="w-full flex space-x-2" aria-label="input-button-group">
          <button className="w-full p-3 rounded-lg font-semibold border border-solid border-primary-500 text-primary-500" type="reset" onClick={formik.handleReset}>
            Reset
          </button>
          <button className="w-full p-3 rounded-lg font-semibold bg-gradient-to-b from-primary-500 to-secondary-700 text-white" type="submit">
            Submit
          </button>
        </div>
        <button aria-label="navigate-login"
          onClick={(e) => {
            e.preventDefault();
            navigate("/auth?mode=register");
          }}
          className="w-full p-3 rounded-lg font-semibold text-primary-500"  
        >
          Register new account
        </button>
      </form>
    </>
  );
};

export default AuthLogin;
