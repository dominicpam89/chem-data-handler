import { Box, CircularProgress, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageElement = styled("img")(({}) => ({
	width: "100%",
	height: "100%",
}));

const ImageComponent: React.FC<{ pictureUrl: string; alt: string }> = ({
	pictureUrl,
	alt,
}) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const img = new Image();
		img.src = pictureUrl;
		img.onload = () => setLoading(false);
	}, [pictureUrl]);
	return (
		<Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
			{loading && <CircularProgress />}
			{!loading && (
				<motion.div
					style={{ borderRadius: 999, overflow: "hidden" }}
					initial={{ width: 0, height: 0, rotateZ: -180 }}
					animate={{ width: 240, height: 240, rotateZ: 0 }}
				>
					<ImageElement src={pictureUrl} alt={alt} />
				</motion.div>
			)}
		</Box>
	);
};

export default ImageComponent;
