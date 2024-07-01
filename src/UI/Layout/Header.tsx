import MobileNavbar from "./Header/MobileNavbar";
import DekstopNavbar from "./Header/DesktopNavbar";
import { useEffect, useState } from "react";

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
