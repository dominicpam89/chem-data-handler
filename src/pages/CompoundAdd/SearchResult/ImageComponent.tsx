import { Box, styled } from "@mui/material";

const Image = styled("img")(({}) => ({
	width: 240,
	height: 240,
	borderRadius: 999,
}));

const ImageComponent: React.FC<{ pictureUrl: string; alt: string }> = ({
	pictureUrl,
	alt,
}) => {
	return (
		<Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
			<Image src={pictureUrl} alt={alt} />
		</Box>
	);
};

export default ImageComponent;
