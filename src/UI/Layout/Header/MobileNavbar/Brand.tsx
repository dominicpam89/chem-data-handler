import { Box, Stack, useTheme } from "@mui/material"
import { BrandText, SidebarBrandIcon } from "../../../Brand"

const SidebarBrand = () => {
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
				<SidebarBrandIcon />
				<BrandText color={theme.palette.primary.main} variant="h6" />
			</Stack>
		</Box>
  )
}
export default SidebarBrand
