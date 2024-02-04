import MobileNavbar from "./Header/MobileNavbar"
import DekstopNavbar from "./Header/DesktopNavbar"
import { useMediaQuery } from "@mui/material"

const UILayoutHeader = () => {
	const isDesktop = useMediaQuery('(min-width:768px)')
	return (
		<>
				{!isDesktop && <MobileNavbar />}
				{isDesktop && <DekstopNavbar />}
		</>
	)
}

export default UILayoutHeader
