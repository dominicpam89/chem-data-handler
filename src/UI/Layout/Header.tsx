import MobileNavbar from "./Header/MobileNavbar";
import DekstopNavbar from "./Header/DesktopNavbar";
import { useEffect, useState } from "react";

/**
 * Custom hook to determine if the screen width is greater than 768 pixels.
 * @returns {boolean} - Returns true if the screen width is greater than 768 pixels, otherwise false.
 * @example
 * const isDesktop = useScreenSize();
 * if (isDesktop) {
 *   // Render desktop components
 * } else {
 *   // Render mobile components
 * }
 */
const useScreenSize = () => {
	const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);
	const updateScreenWidth = () => {
		setIsDesktop(window.innerWidth > 768);
	};
	useEffect(() => {
		window.addEventListener("resize", updateScreenWidth);
		return () => window.removeEventListener("resize", updateScreenWidth);
	}, []);
	return isDesktop;
};

/**
 * UILayoutHeader component that displays either a mobile or desktop navigation bar
 * based on the screen width.
 * @component
 */
const UILayoutHeader = () => {
	const isDesktop = useScreenSize();
	return (
		<>
			{!isDesktop && <MobileNavbar />}
			{isDesktop && <DekstopNavbar />}
		</>
	);
};

export default UILayoutHeader;
