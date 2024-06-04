import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
	resetField: () => void;
}

const ButtonActions: React.FC<Props> = ({ resetField }) => {
	const navigate = useNavigate();
	return (
		<Stack direction="row" spacing={1} marginTop={3}>
			<Button variant="contained" type="submit" aria-label="form-submit">
				Search
			</Button>
			<Button
				variant="contained"
				type="button"
				color="info"
				aria-label="reset-form-fields"
				onClick={resetField}
			>
				Reset Fields
			</Button>
			<Button
				variant="outlined"
				type="button"
				onClick={() => navigate("/compounds")}
				aria-label="form-exit"
			>
				Back to Compounds
			</Button>
		</Stack>
	);
};

export default ButtonActions;
