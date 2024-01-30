import { useForm } from "react-hook-form"
import { AuthForm } from "./Styled"
import InputName from "./Register/InputName"
import InputEmail from "./Common/InputEmail"
import InputPassword from "./Common/InputPassword"
import AuthButtons from "./Common/Buttons"
import { Stack } from "@mui/material"

export type TypeRegisterInputForm = {
	name: {
		firstName: string
		lastName: string
	}
	email: string
	password: string
}

const AuthRegister = () => {
	const { control, handleSubmit, reset } = useForm<TypeRegisterInputForm>({
		defaultValues: {
			name: {
				firstName: "",
				lastName: "",
			},
			email: "",
			password: "",
		},
		mode:"onBlur",
		reValidateMode:"onChange",
	})
	const onSubmit = (data: TypeRegisterInputForm) => {
		console.log(data)
	}
	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)}>
			<Stack direction={{ xs: "column", md: "row" }} spacing={3}>
				<InputName
					control={control}
					label="First Name"
					name="name.firstName"
				/>
				<InputName
					control={control}
					label="Last Name"
					name="name.lastName"
				/>
			</Stack>
			<InputEmail control={control} name="email" label="Email" />
			<InputPassword control={control} name="password" label="Password" />
			<AuthButtons reset={reset} switchMode="login" />
		</AuthForm>
	)
}

export default AuthRegister
