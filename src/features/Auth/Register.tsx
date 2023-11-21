import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
   FormControl,
   IconButton,
   OutlinedInput,
   InputAdornment,
   InputLabel,
   TextField,
   FormHelperText,
   Stack
} from "@mui/material"
import { ButtonPrimary } from "../../UI/Button"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { useFormik } from "formik"
import { AuthRegisterValidationSchema, AuthRegisterInitialValues } from "../../utils/Auth/register"

const AuthRegister = () => {
   const [showPassword, setShowPassword] = useState<boolean>(false)
   const navigate = useNavigate()
   const formik = useFormik({
      initialValues: AuthRegisterInitialValues,
      validationSchema: AuthRegisterValidationSchema,
      onSubmit: (values) => {
         console.log(values)
      },
   })

   return (
      <>
         <Stack
            component="form"
            direction={"column"}
            spacing={3}
            onSubmit={(e) => {
               e.preventDefault()
               formik.handleSubmit()
            }}
         >
            <TextField
               aria-label="input-first-name"
               error={formik.errors.firstName && formik.touched.firstName ? true : false}
               helperText={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : null}
               id="firstName"
               label="First Name"
               {...formik.getFieldProps("firstName")}
            />
            <TextField
               aria-label="input-last-name"
               error={formik.errors.lastName && formik.touched.lastName ? true : false}
               helperText={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : null}
               id="lastName"
               label="Last Name"
               {...formik.getFieldProps("lastName")}
            />
            <TextField
               aria-label="input-email"
               error={formik.errors.email && formik.touched.email ? true : false}
               helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null}
               id="email"
               label="Email"
               {...formik.getFieldProps("email")}
            />
            <FormControl
               variant="outlined"
               aria-label="input-password"
               error={formik.errors.password && formik.touched.password ? true : false}
            >
               <InputLabel htmlFor="password">Password</InputLabel>
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
                  {...formik.getFieldProps("password")}
               />
               {formik.errors.password && formik.touched.password && (
                  <FormHelperText error>{formik.errors.password}</FormHelperText>
               )}
            </FormControl>
            <Stack id="button-group" direction={"row"} spacing={2}>
               <ButtonPrimary fullWidth variant="outlined" type="reset" onClick={formik.handleReset}>
                  Reset
               </ButtonPrimary>
               <ButtonPrimary fullWidth variant="contained" type="submit">
                  Submit
               </ButtonPrimary>
            </Stack>
            <ButtonPrimary
               id="navigate-register-button"
               onClick={(e) => {
                  e.preventDefault()
                  navigate("/auth?mode=login")
               }}
            >
               Already has account?
            </ButtonPrimary>
         </Stack>
      </>
   )
}

export default AuthRegister
