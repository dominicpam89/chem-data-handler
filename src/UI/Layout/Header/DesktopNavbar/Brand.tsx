import { Box, Stack, useTheme } from "@mui/material"
import { BrandText, DesktopNavbarBrandIcon } from "../../../Brand"
import { useContextMain } from "../../../../data/hooks/useContext"

const BrandComponent = () => {
	const theme = useTheme()
	return (
		<Box
			aria-label="sidebar-brand"
			sx={{
				paddingY: theme.spacing(8),
				paddingX: theme.spacing(8),
			}}
		>
			<Stack
				direction="column"
				spacing={1}
				justifyContent="center"
				alignItems="center"
			>
				<DesktopNavbarBrandIcon />
				<BrandText
					color={theme.palette.primary.contrastText}
					variant="h6"
				/>
			</Stack>
		</Box>
	)
}

const Brand = () => {
	const { sidebarPersist } = useContextMain()
	return !sidebarPersist.minimize && <BrandComponent />
}

export default Brand
