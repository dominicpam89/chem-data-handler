import { Stack, useTheme } from "@mui/material"
import { AuthBrandIcon, BrandText } from "../../../UI/Brand"

const AuthBrand = () => {
	const theme = useTheme()
	return (
		<Stack direction="column" spacing={2} alignItems="center">
			<AuthBrandIcon />
			<BrandText color={theme.palette.primary.main} variant="h6" />
		</Stack>
	)
}

export default AuthBrand
