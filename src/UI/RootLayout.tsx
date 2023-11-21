import { Outlet } from "react-router-dom"
import UINavbar from "./Navbar"
import UISidebarPersist from "./SidebarNavPersist"

const UIRootLayout = () => {
   return (
      <>
         <header>
            <UINavbar />
         </header>
         <main>
            <UISidebarPersist />
            <Outlet />
         </main>
      </>
   )
}

export default UIRootLayout
