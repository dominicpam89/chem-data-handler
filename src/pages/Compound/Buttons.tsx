import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { ContextMain } from "../../data/context/main";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
	const navigate = useNavigate();
	const { searchBar } = useContext(ContextMain).compound;
	return (
		<Box
			sx={{
				marginTop: 4,
				display: "flex",
				justifyContent: "flex-end",
				gap: 1,
			}}
		>
			<Button
				variant="outlined"
				color="error"
				onClick={() => {
					searchBar.setSelectedValue(null);
					navigate("/compounds");
				}}
			>
				Back to Compounds
			</Button>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => navigate(`result`)}
			>
				Predict
			</Button>
		</Box>
	);
};

export default Buttons;
