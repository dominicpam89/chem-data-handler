import { Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

const ResultContainer: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Stack direction="column" gap={5} justifyContent="center" width="100%">
			<Typography variant="h3" component="h1" textAlign="center">
				Pubchem Search Result
			</Typography>
			{children}
		</Stack>
	);
};

export default ResultContainer;
