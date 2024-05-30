import { Outlet } from "react-router-dom";
import { UILayoutMainRootComponent } from "./Layout/Main";
import UILayoutHeader from "./Layout/Header";
import UILayoutFooter from "./Layout/Footer";

const RootLayout = () => {
	return (
		<>
			<UILayoutHeader />
			<UILayoutMainRootComponent>
				<Outlet />
			</UILayoutMainRootComponent>
			<UILayoutFooter />
		</>
	);
};

export default RootLayout;
