import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthPage from "./pages/Auth"
import RootLayout from "./UI/Layout"
import PageHome, {loader as loaderHome} from "./pages/Home"
import PageCompounds from "./pages/Compounds"
import PagePredictResult from "./pages/Compounds/Page_PredictResult"
import PageAddCompound from "./pages/CompoundAdd"
import PageProfile from "./pages/Profile"
import { loaderLogout } from "./pages/Logout"
import Compound from "./pages/Compounds/Compound"

const router = createBrowserRouter([
  {path:"/", element: <RootLayout />, children:[
    {index:true, loader: loaderHome},
    {path: "home", element:<PageHome />},
    {path: "compounds", children:[
      {index:true, element:<PageCompounds />},
      {path: "add", element: <PageAddCompound />},
      {path: ":pk", element: <Compound />},
      {path: ":pk/result", element: <PagePredictResult />}
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