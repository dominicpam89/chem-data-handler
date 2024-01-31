import DesktopNavbarContainer from "./DesktopNavbar/Container"
import ContainerWidthToggle from "./DesktopNavbar/ContainerWidthToggle"
import Items from "./DesktopNavbar/Items"
import Brand from "./DesktopNavbar/Brand"

const DekstopNavbar = () => {
	return (
		<DesktopNavbarContainer>
			<Brand />
			<Items />
			<ContainerWidthToggle />
		</DesktopNavbarContainer>
	)
}

export default DekstopNavbar
