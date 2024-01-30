import { Box } from "@mui/material"

interface Props{
	children: React.ReactNode,
	centered?: boolean
}

const UILayoutMain: React.FC<Props> = ({ children, centered=false }) => {
	const paddingX = {xs: 3, sm: 6, md: 9}
	const paddingY = {xs: 2, sm: 4, md: 6}
	if(centered) return (
		<Box
			aria-label="layout-main-container"
			paddingX={paddingX}
			paddingY={paddingY}
			minHeight="100vh"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			{children}
		</Box>
	)
	else return (
		<Box
			aria-label="layout-main-container"
			paddingX={paddingX}
			paddingY={paddingY}
		>
			{children}
		</Box>
	)
}

export default UILayoutMain
