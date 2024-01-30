import { ButtonPrimary } from "../Styled"
import { useNavigate } from "react-router-dom"
import { UseFormReset } from "react-hook-form"
import { Stack } from "@mui/material"

interface Props{
  switchMode: "register"|"login"
	reset: UseFormReset<any>
}

const AuthButtons:React.FC<Props> = ({switchMode, reset}) => {
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
				>
					Reset
				</ButtonPrimary>
				<ButtonPrimary
					fullWidth
					variant="contained"
					type="submit"
					disableElevation
				>
					Submit
				</ButtonPrimary>
			</Stack>

			<ButtonPrimary
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
