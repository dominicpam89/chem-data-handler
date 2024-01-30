import { Outlet } from "react-router-dom";
import UILayoutMain from "./Layout/Main";
import UILayoutHeader from "./Layout/Header";
import UILayoutFooter from "./Layout/Footer";

const RootLayout = () => {
  return <>
    <UILayoutHeader />
    <UILayoutMain>
      <Outlet />
    </UILayoutMain>
    <UILayoutFooter />
  </>
}
 
export default RootLayout;