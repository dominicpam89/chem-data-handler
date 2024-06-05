import { Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

const ResultContainer: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Stack direction="column" gap={6} justifyContent="center" width="100%">
			<Stack direction="column" gap={1}>
				<Typography variant="h2" component="h1" textAlign="center">
					Search Result
				</Typography>
				<Typography
					variant="subtitle2"
					fontSize={16}
					component="h2"
					textAlign="center"
				>
					From Pubchem Database Query
				</Typography>
			</Stack>
			{children}
		</Stack>
	);
};

export default ResultContainer;
