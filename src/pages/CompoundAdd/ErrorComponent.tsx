import { Alert, Stack, Typography } from "@mui/material";
interface Prop {
	error: Error;
}

const ErrorComponent: React.FC<Prop> = ({ error }) => {
	return (
		<Stack direction="column" gap={1}>
			<Alert severity="error" variant="outlined">
				{error.message}
			</Alert>
			<Alert severity="info" variant="standard">
				<Typography variant="body2">Try to change searchByValue</Typography>
				<Typography variant="body2">
					Or change search compound type (smiles or name)
				</Typography>
			</Alert>
		</Stack>
	);
};

export default ErrorComponent;
