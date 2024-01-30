import AuthButtons from "./Common/Buttons"
import InputEmail from "./Common/InputEmail"
import InputPassword from "./Common/InputPassword"
import { AuthForm } from "./Styled"
import { useForm } from "react-hook-form"

export type TypeLoginFormInput = {
	email: string
	password: string
}

const AuthLogin = () => {
	const { handleSubmit, control, reset } = useForm<TypeLoginFormInput>({
		defaultValues: {
			email: "",
			password: "",
		},
		mode:"onBlur",
		reValidateMode: "onChange"
	})
	const onSubmit = (data: TypeLoginFormInput) => {
		console.log(data)
	}
	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)}>
			<InputEmail control={control} name="email" label="Email" />
			<InputPassword control={control} name="password" label="Password" />
			<AuthButtons switchMode="register" reset={reset} />
		</AuthForm>
	)
}

export default AuthLogin
