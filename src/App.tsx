import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthPage from "./pages/Auth"
import RootLayout from "./UI/Layout"
import PageHome from "./pages/Home"

const router = createBrowserRouter([
  {path:"/", element: <RootLayout />, children:[
    {index:true, element:<PageHome />},
    {path: "operation", element:<>Operation Page</>},
    {path: "profile", element: <>Profile Page</>}
  ]},
  {path: "/auth", element: <AuthPage />}
])

const App = ()=>{
  return <RouterProvider router={router} />
}

export default App