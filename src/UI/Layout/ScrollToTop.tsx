import { Fab, Zoom } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState } from "react";

/**
 * Custom hook to handle scroll functionality.
 * @returns {Object} - An object containing the scroll trigger state and a function to scroll to the top.
 * @returns {boolean} trigger - Indicates if the scroll position is beyond the window height.
 * @returns {function} scrollToTop - Function to scroll the window to the top smoothly.
 * @example
 * const { trigger, scrollToTop } = useScrollFn();
 * if (trigger) {
 *   // Show scroll to top button
 * }
 */
const useScrollFn = () => {
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
	return { trigger, scrollToTop };
};

const ScrollToTop = () => {
	const { trigger, scrollToTop } = useScrollFn();
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
