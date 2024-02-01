import { Box, Typography } from "@mui/material"
import { TypeCompound } from "../../../data/context/compound"

interface IRenderOption {
	props: React.HTMLAttributes<HTMLLIElement>
	option: TypeCompound
}
const RenderOption: React.FC<IRenderOption> = ({ props, option }) => {
	return (
		<Box component="li" {...props}>
			<Box
				component="span"
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="body1" component="h3">
					{option.trivial_name}
				</Typography>
				<Typography
					variant="body2"
					component="h5"
					fontSize={12}
					sx={{ opacity: 0.6 }}
				>
					{option.smiles}
				</Typography>
			</Box>
		</Box>
	)
}

export default RenderOption