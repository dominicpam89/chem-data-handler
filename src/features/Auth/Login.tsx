import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { AuthLoginInitialValues, AuthLoginValidationSchema } from "../../utils/Auth/login"
import {
   TextField,
   FormControl,
   InputLabel,
   OutlinedInput,
   InputAdornment,
   IconButton,
   FormHelperText,
   Stack,
} from "@mui/material"
import { ButtonPrimary } from "../../UI/Button"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { useLogin, useGetCurrentUser } from "../../data/hooks/auth"
import { toast } from "react-hot-toast"

const AuthLogin = () => {
   const navigate = useNavigate()
   const { mutate, isPending, isError } = useLogin()
   const { isAuth } = useGetCurrentUser()
   const [showPassword, setShowPassword] = useState<boolean>(false)
   
   const formik = useFormik({
      initialValues: AuthLoginInitialValues,
      validationSchema: AuthLoginValidationSchema,
      onSubmit: (values) => {
         mutate({ email: values.email, password: values.password })
      },
   })

   useEffect(() => {
      if (isAuth) navigate("/")
   }, [isAuth, navigate])


   return (
      <>
         {isError && toast.error("Can't be logged in!")}
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

            {/* <div className="w-full flex space-x-2" aria-label="input-button-group"> */}
            <Stack aria-label="input-button-group" width={"100%"} spacing={2} direction="row">
               <ButtonPrimary fullWidth variant="outlined" type="reset" onClick={formik.handleReset} disabled={isPending}>
                  Reset 
               </ButtonPrimary>
               <ButtonPrimary fullWidth variant="contained" type="submit" disabled={isPending} disableElevation>
                  Submit
               </ButtonPrimary>
            </Stack>

            <ButtonPrimary
               onClick={(e) => {
                  e.preventDefault()
                  navigate("/auth?mode=register")
               }}
               disabled={isPending}
            >
               Register new account
            </ButtonPrimary>
         </Stack>
      </>
   )
}

export default AuthLogin
