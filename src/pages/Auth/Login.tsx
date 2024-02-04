import AuthButtons from "./Common/Buttons"
import InputEmail from "./Common/InputEmail"
import InputPassword from "./Common/InputPassword"
import { AuthForm } from "./Styled"
import { useForm } from "react-hook-form"
import { useDemoLogin } from "../../data/hooks/useDemoLogin"
import { Alert } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export type TypeLoginFormInput = {
	email: string
	password: string
}

const AuthLogin = () => {
	
	const { handleSubmit, control, reset } = useForm<TypeLoginFormInput>({
		defaultValues: {
			email: "demo@email.com",
			password: "DemoPassword12345",
		},
		mode:"onBlur",
		reValidateMode: "onChange"
	})

	const {onLogin, onLoginState, onLoginData} = useDemoLogin()
	const onSubmit = (data: TypeLoginFormInput) => {
		onLogin(data)
	}
	const navigate = useNavigate()
	useEffect(()=>{
		if(onLoginState.isSuccess) navigate("/compounds")
	}, [onLoginState.isSuccess])

	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)}>
			{onLoginState.isError && <Alert severity="error">{onLoginData.error!.message}</Alert>}
			<InputEmail control={control} name="email" label="Email" />
			<InputPassword control={control} name="password" label="Password" />
			<AuthButtons switchMode="register" reset={reset} onLoginState={onLoginState} />
		</AuthForm>
	)
}

export default AuthLogin
