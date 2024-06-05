import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollToTop = () => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: window.screen.height,
	});
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<Zoom in={trigger}>
			<Fab
				aria-label="fab"
				onClick={scrollToTop}
				color="info"
				sx={{
					position: "fixed",
					width: 40,
					height: 40,
					bottom: 48,
					right: 48,
				}}
			>
				<ExpandLessIcon />
			</Fab>
		</Zoom>
	);
};

export default ScrollToTop;
