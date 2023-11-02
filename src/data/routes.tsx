import { RouteObject, createBrowserRouter } from 'react-router-dom';
// User Pages
import RootLayoutPage from '../pages/general/Root';
import UserHome from '../pages/users/Home';
import UserSettingsPage from '../pages/users/Settings';
import AuthPage from '../pages/general/Auth';

const routes:RouteObject[] = [
  {path:'/', element: <RootLayoutPage />, children:[
    {index:true, element:<UserHome />},
    {path:'settings', element: <UserSettingsPage />},
  ]},
  {path:'/auth', element:<AuthPage />}
];

const router = createBrowserRouter(routes);
export default router;