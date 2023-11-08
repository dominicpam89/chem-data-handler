import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { AuthLoginInitialValues, AuthLoginValidationSchema } from "../../utils/Auth/login"
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { useLogin, useGetCurrentUser } from "../../data/hooks/auth"

const AuthLogin = () => {
    const navigate = useNavigate()
    const { mutate, isPending, isError, error } = useLogin()
    const {isAuth} = useGetCurrentUser()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const formik = useFormik({
        initialValues: AuthLoginInitialValues,
        validationSchema: AuthLoginValidationSchema,
        onSubmit: (values) => {
            mutate({ email: values.email, password: values.password })
        },
    })
    useEffect(()=>{
        if(isAuth) navigate('/')
    },[isAuth])
    return (
        <>
            {isPending && <p>...logging in...</p>}
            {isError && <p>{error?.message}</p>}
            <form
                className="flex flex-col space-y-4"
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
                <FormControl variant="outlined" aria-label="input-password" error={formik.errors.password && formik.touched.password ? true : false}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((ps) => !ps)} onMouseDown={() => setShowPassword((ps) => !ps)}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.errors.password && formik.touched.password && <FormHelperText error>{formik.errors.password}</FormHelperText>}
                </FormControl>

                <div className="w-full flex space-x-2" aria-label="input-button-group">
                    <button className="w-full p-3 btn-primary-outlined disabled:btn-disabled-outlined" type="reset" onClick={formik.handleReset} disabled={isPending}>
                        Reset
                    </button>
                    <button className="w-full p-3 btn-primary disabled:btn-disabled" type="submit" disabled={isPending}>
                        Submit
                    </button>
                </div>

                <button
                    aria-label="navigate-login"
                    onClick={(e) => {
                        e.preventDefault()
                        navigate("/auth?mode=register")
                    }}
                    className="w-full p-3 rounded-lg font-semibold text-primary-500"
                    disabled={isPending}
                >
                    Register new account
                </button>
            </form>
        </>
    )
}

export default AuthLogin
