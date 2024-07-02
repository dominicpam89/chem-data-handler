import { Outlet } from "react-router-dom";
import { UILayoutMainRootComponent } from "./Layout/Main";
import UILayoutHeader from "./Layout/Header";
import UILayoutFooter from "./Layout/Footer";
import ScrollToTop from "./Layout/ScrollToTop";

/**
 * The RootLayout component provides the main layout structure for the application.
 * It includes the header, main content area (with an outlet for nested routes),
 * and footer, as well as a scroll-to-top functionality.
 *
 * @returns {JSX.Element} rendered RootLayout component
 * @copyright dominicpam89
 * @example
 * const router = createBrowserRouter([
 * 	{path:"/", element: <RootLayout />}
 * ])
 * export default function App(){
 * 	return <RouterProvider router={router} />
 * }
 */

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
