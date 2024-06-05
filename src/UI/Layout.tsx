import { Outlet } from "react-router-dom";
import { UILayoutMainRootComponent } from "./Layout/Main";
import UILayoutHeader from "./Layout/Header";
import UILayoutFooter from "./Layout/Footer";
import ScrollToTop from "./Layout/ScrollToTop";

const RootLayout = () => {
	return (
		<>
			<UILayoutHeader />
			<UILayoutMainRootComponent>
				<Outlet />
				<ScrollToTop />
			</UILayoutMainRootComponent>
			<UILayoutFooter />
		</>
	);
};

export default RootLayout;
