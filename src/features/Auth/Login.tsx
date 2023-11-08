import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { AuthLoginInitialValues, AuthLoginValidationSchema } from "../../utils/Auth/login"
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const AuthLogin = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const formik = useFormik({
        initialValues: AuthLoginInitialValues,
        validationSchema: AuthLoginValidationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })
    const navigate = useNavigate()
    return (
        <>
            <form
                className="flex flex-col space-y-4"
                onSubmit={(e) => {
                    e.preventDefault()
                    formik.handleSubmit()
                }}
            >
                <TextField
                    aria-label="input-username"
                    error={formik.errors.username && formik.touched.username ? true : false}
                    helperText={formik.errors.username && formik.touched.username ? formik.errors.username : null}
                    id="username"
                    label="Username"
                    {...formik.getFieldProps("username")}
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
                    <button className="w-full p-3 btn-primary-outlined" type="reset" onClick={formik.handleReset}>
                        Reset
                    </button>
                    <button className="w-full p-3 btn-primary" type="submit">
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
                >
                    Register new account
                </button>
            </form>
        </>
    )
}

export default AuthLogin
