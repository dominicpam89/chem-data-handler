import { Box, LinearProgress } from "@mui/material";

const UILoader = () => {
	return (
		<Box sx={{ width: "100%" }} aria-label="loader-container">
			<LinearProgress aria-label="loader" />
		</Box>
	);
};

export default UILoader;
