import { Stack, Typography, Link, LinearProgress } from "@mui/material";
import { useState } from "react";

const PageKetcher = () => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<Stack width="100%" height="100vh" direction="column" gap={6}>
			<Stack direction="column" gap={1} alignItems="center">
				<Typography variant="h3" component="h1">
					Ketcher Tools
				</Typography>
				<Typography variant="subtitle1" component="h2">
					Life science open source EPAM
				</Typography>
				<Link href="https://lifescience.opensource.epam.com/ketcher/">
					EPAM documentation
				</Link>
			</Stack>
			{isLoading && <LinearProgress />}
			<iframe
				onLoad={() => setIsLoading(false)}
				src="./ketcher-assets/index.html"
				style={{ border: "none", height: "100%", width: "100%" }}
				title="Ketcher-Standalone"
			></iframe>
		</Stack>
	);
};

export default PageKetcher;
