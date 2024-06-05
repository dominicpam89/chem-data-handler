import { Alert } from "@mui/material";
interface Prop {
	error: Error;
}

const ErrorComponent: React.FC<Prop> = ({ error }) => {
	return (
		<Alert severity="error" variant="outlined">
			{error.message}
		</Alert>
	);
};

export default ErrorComponent;
