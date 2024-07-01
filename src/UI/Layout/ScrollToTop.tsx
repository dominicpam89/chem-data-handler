import { Fab, Zoom } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [trigger, setTrigger] = useState<boolean>(false);
	const handleScroll = () => {
		if (window.scrollY > window.innerHeight) setTrigger(true);
		else setTrigger(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
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
