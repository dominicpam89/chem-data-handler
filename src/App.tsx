import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UIRootLayout from './UI/RootLayout';
import AuthPage from './features/Auth';
import HomeUserPage from './features/HomeUser';
import ProfileUserPage from './features/ProfileUser';
import HomeAdminPage from './features/HomeAdmin';
import ProfileAdminPage from './features/ProfileAdmin';

const router = createBrowserRouter([
  {path:'auth', element:<AuthPage />},
  {path:'/', element:<UIRootLayout />, children:[
    {index:true, element: <HomeUserPage />},
    {path:'profile', element: <ProfileUserPage />}
  ]},
  {path:'/admin', element:<></>, children:[
    {index:true, element: <HomeAdminPage />},
    {path:'profile', element: <ProfileAdminPage />}
  ]}
]);

const App = ()=>{
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;