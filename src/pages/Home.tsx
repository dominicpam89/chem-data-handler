import { Stack, Typography } from "@mui/material";
import { redirect } from "react-router-dom";

const PageHome = () => {
	// Can be filled with anyting related to Home Page
	// For now it is redirecting to /predict
	return (
		<Stack direction="column" spacing={2}>
			<Typography variant="h3" component="h1">
				PageHome
			</Typography>
			<Typography variant="body1" component="p">
				May be filled with any content, usually Dashboard
			</Typography>
		</Stack>
	);
};

export default PageHome;

export const loader = async () => {
	return redirect("/auth");
};
