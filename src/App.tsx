import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UIRootLayout from "./UI/RootLayout"
import AuthPage from "./features/Auth"
import HomeUserPage from "./features/HomeUser"
import CompoundOperation from "./features/Compound"
import ProfileUserPage from "./features/ProfileUser"
import HomeAdminPage from "./features/HomeAdmin"
import ProfileAdminPage from "./features/ProfileAdmin"
import RouteProtection from "./features/RouteProtection"

const router = createBrowserRouter([
   { path: "auth", element: <AuthPage /> },
   {
      path: "/",
      element: (
         <RouteProtection>
            <UIRootLayout />
         </RouteProtection>
      ),
      children: [
         { index: true, element: <HomeUserPage /> },
         { path: "operation", element: <CompoundOperation />},
         { path: "profile", element: <ProfileUserPage /> },
      ],
   },
   {
      path: "/admin",
      element: <></>,
      children: [
         { index: true, element: <HomeAdminPage /> },
         { path: "profile", element: <ProfileAdminPage /> },
      ],
   },
])

const App = () => {
   return (
      <>
         <RouterProvider router={router} />
      </>
   )
}

export default App
