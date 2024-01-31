import { Stack, Typography, styled } from "@mui/material"
import { BiSolidAnalyse } from "react-icons/bi"

export const BrandIcon = styled(BiSolidAnalyse)(({}) => ({
	fontSize: "24px",
	color: "inherit",
}))

export const MobileNavbarBrandIcon = styled(BiSolidAnalyse)(({ }) => ({
	fontSize: "24px",
	color: "inherit",
}))

export const DesktopNavbarBrandIcon = styled(BiSolidAnalyse)(({theme}) => ({
	fontSize: "32px",
	color: theme.palette.primary.contrastText,
}))

export const AuthBrandIcon = styled(BiSolidAnalyse)(({ theme }) => ({
	fontSize: "36px",
	color: theme.palette.primary.main,
	[theme.breakpoints.up("md")]: {
		fontSize: "54px",
	},
}))

export const SidebarBrandIcon = styled(BiSolidAnalyse)(({ theme }) => ({
	fontSize: "36px",
	color: theme.palette.primary.main,
}))

interface IBrandText{
	variant: "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"body1"|"body2"
	color: string | any
}
export const BrandText:React.FC<IBrandText> = ({variant, color})=>{
	return (
		<Typography component="h1" variant={variant} color={color} >
			{import.meta.env.VITE_APP_NAME}
		</Typography>
	)
}

const UIBrand = () => {
	return (
		<Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
			<BrandIcon />
			<BrandText color="inherit" variant="h6" />
		</Stack>
	)
}

export default UIBrand
