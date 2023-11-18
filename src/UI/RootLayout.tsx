import { Outlet } from "react-router-dom"
import UINavbar from "./Navbar"
import UISidebarPersist from "./SidebarNavPersist"
import UIToaster from "./Toaster"

const UIRootLayout = () => {
   return (
      <>
         <UIToaster />
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
