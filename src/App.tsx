import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthPage from "./pages/Auth"
import RootLayout from "./UI/Layout"
import PageHome, {loader as loaderHome} from "./pages/Home"
import PageCompounds from "./pages/Compounds"
import PageProfile from "./pages/Profile"

const router = createBrowserRouter([
  {path:"/", element: <RootLayout />, children:[
    {index:true, loader: loaderHome},
    {path: "home", element:<PageHome />},
    {path: "compounds", element:<PageCompounds />},
    {path: "profile", element: <PageProfile />},
    {path: "logout", element: <>Logout</>},
  ]},
  {path: "/auth", element: <AuthPage />}
])

const App = ()=>{
  return <RouterProvider router={router} />
}

export default App