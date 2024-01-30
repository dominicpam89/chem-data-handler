import { Stack, Typography, styled } from "@mui/material"
import { BiSolidAnalyse } from "react-icons/bi"

const BrandIcon = styled(BiSolidAnalyse)(({ theme }) => ({
	fontSize: "32px",
	color: "inherit",
	[theme.breakpoints.up("md")]: {
		fontSize: "44px",
	},
}))

const UIBrand = () => {
	return (
		<Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
			<BrandIcon />
			<Typography variant="h5" component="h1" color="inherit">
				{import.meta.env.VITE_APP_NAME}
			</Typography>
		</Stack>
	)
}

export default UIBrand
