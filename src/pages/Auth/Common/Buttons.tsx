import { ButtonPrimary } from "../Styled"
import { useNavigate } from "react-router-dom"
import { UseFormReset } from "react-hook-form"
import { Stack } from "@mui/material"

interface Props{
  switchMode: "register"|"login"
	reset: UseFormReset<any>
	onLoginState: {
		isError: boolean;
    isPending: boolean;
    isSuccess: boolean;
	}
}

const AuthButtons:React.FC<Props> = ({switchMode, reset, onLoginState}) => {
  const navigate = useNavigate()
	return (
		<>
			<Stack
				aria-label="input-button-group"
				width={"100%"}
				spacing={2}
				direction="row"
			>
				<ButtonPrimary
					fullWidth
					variant="outlined"
					type="reset"
					onClick={()=>reset()}
					disabled={switchMode==="register" ? onLoginState.isPending:false}
				>
					Reset
				</ButtonPrimary>
				<ButtonPrimary
					fullWidth
					variant="contained"
					type="submit"
					disableElevation
					disabled={switchMode==="register" ? onLoginState.isPending:false}
				>
					Submit
				</ButtonPrimary>
			</Stack>

			<ButtonPrimary
				disabled={switchMode==="register" ? onLoginState.isPending:false}
				onClick={(e) => {
					e.preventDefault()
					navigate(`/auth?mode=${switchMode}`)
				}}
			>
				{switchMode==="register" ? "Register new account":"Already has account?"}
			</ButtonPrimary>
		</>
	)
}

export default AuthButtons
