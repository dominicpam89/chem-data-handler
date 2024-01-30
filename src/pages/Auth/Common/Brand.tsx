import { Typography } from "@mui/material"
import { BrandIcon as Icon } from "../Styled"


const AuthBrand = () => {
	return (
		<>
			<Icon />
			<Typography variant="h4" component="h1" color="primary">
				{import.meta.env.VITE_APP_NAME}
			</Typography>
		</>
	)
}

export default AuthBrand
