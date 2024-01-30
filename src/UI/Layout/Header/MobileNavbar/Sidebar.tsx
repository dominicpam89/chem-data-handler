import MobileNavDrawer from "./Drawer"
import SidebarContainer from "./Container"
import SidebarItems from "./Items"
import SidebarBrand from "./Brand"

const NavbarSidebar = () => {
  return (
		<MobileNavDrawer>
			<SidebarContainer>
				<SidebarBrand />
				<SidebarItems />
			</SidebarContainer>
		</MobileNavDrawer>
  )
}

export default NavbarSidebar
