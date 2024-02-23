import { Stack, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ButtonActions = () => {
	const navigate = useNavigate()
	return (
		<Stack direction="row" spacing={2}>
			<Button variant="contained" type="submit" aria-label="form-submit">
				Search
			</Button>
			<Button
				variant="outlined"
				type="button"
				onClick={() => navigate("/compounds")}
				aria-label="form-exit"
			>
				Back to Compounds
			</Button>
		</Stack>
	)
}

export default ButtonActions
