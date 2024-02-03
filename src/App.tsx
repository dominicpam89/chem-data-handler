import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthPage from "./pages/Auth"
import RootLayout from "./UI/Layout"
import {loader as loaderHome} from "./pages/Home"
import PagePredict from "./pages/Predict"
import PagePredictTest from "./pages/Predict.test"
import PageProfile from "./pages/Profile"

const router = createBrowserRouter([
  {path:"/", element: <RootLayout />, children:[
    {index:true, loader: loaderHome},
    {path: "predict", element:<PagePredict />},
    {path: "predict-test", element: <PagePredictTest />},
    {path: "profile", element: <PageProfile />},
    {path: "logout", element: <>Logout</>},
  ]},
  {path: "/auth", element: <AuthPage />}
])

const App = ()=>{
  return <RouterProvider router={router} />
}

export default App