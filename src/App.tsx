import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthPage from "./pages/Auth"
import RootLayout from "./UI/Layout"
import PageHome, {loader as loaderHome} from "./pages/Home"
import PageCompounds from "./pages/Compounds"
import PageCompound from "./pages/Compound"
import PageAddCompound from "./pages/CompoundAdd"
import PagePredictResult from "./pages/Compound/_PredictResult"
import PageProfile from "./pages/Profile"
import { loaderLogout } from "./pages/Logout"

const router = createBrowserRouter([
  {path:"/", element: <RootLayout />, children:[
    {index:true, loader: loaderHome},
    {path: "home", element:<PageHome />},
    {path: "compounds", children:[
      {index:true, element:<PageCompounds />},
      {path: ":pk", element: <PageCompound />},
      {path: ":pk/result", element: <PagePredictResult />},
      {path: "add", element: <PageAddCompound />},
    ]},
    {path: "profile", element: <PageProfile />},
    {path: "logout", loader: loaderLogout},
  ]},
  {path: "/auth", element: <AuthPage />}
])

const App = ()=>{
  return <RouterProvider router={router} />
}

export default App