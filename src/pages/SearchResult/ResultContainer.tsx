import { Button, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const ResultContainer: React.FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();
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
				<Button
					variant="text"
					color="secondary"
					onClick={() => navigate("/compounds/add")}
				>
					Back to Search Form
				</Button>
			</Stack>
			{children}
		</Stack>
	);
};

export default ResultContainer;
