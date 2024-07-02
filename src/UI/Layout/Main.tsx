import { styled, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { ContextMain } from "../../data/context/main";
import {
	DESKTOPNAVBARCONTAINERFULL_WIDTH,
	DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH,
	APPBAR_HEIGHT,
	TOOLBAR_STYLED_PADDING,
} from "./Header/Styled";

/**
 * A styled main layout base component with responsive padding.
 * @component
 */
const LayoutBase = styled("main")(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
	},
	[theme.breakpoints.up("sm")]: {
		padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
	},
	[theme.breakpoints.up("md")]: {
		padding: `${theme.spacing(6)} ${theme.spacing(9)}`,
	},
}));

/**
 * A styled component for the Desktop Layout <main>
 * based on LayoutBase.
 * @component
 */
export const UIRootLayoutMainDesktop = styled(LayoutBase)(({}) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

/**
 * A styled component for the Mobile Layout <main>
 * based on LayoutBase.
 * @component
 */
export const UIRootLayoutMainMobile = styled(LayoutBase)(({}) => ({
	marginTop: `${APPBAR_HEIGHT + TOOLBAR_STYLED_PADDING}px`,
}));

/**
 * A styled component for the Auth Page,
 * separated layout,
 * based on LayoutBase.
 * @component
 */
export const UILayoutMainAuth = styled(LayoutBase)(({}) => ({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}));

interface Props {
	children: React.ReactNode;
}

/**
 * The main root layout component that conditionally renders either the desktop or mobile layout
 * based on screen size and sidebar state.
 * use custom styled components above
 * @component
 */
export const UILayoutMainRootComponent: React.FC<Props> = ({ children }) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	const { sidebarPersist } = useContext(ContextMain);
	if (isDesktop)
		return (
			<UIRootLayoutMainDesktop
				sx={{
					marginLeft: sidebarPersist.minimize
						? DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH
						: DESKTOPNAVBARCONTAINERFULL_WIDTH,
					transition: "all 300ms ease-in-out",
				}}
			>
				{children}
			</UIRootLayoutMainDesktop>
		);
	else return <UIRootLayoutMainMobile>{children}</UIRootLayoutMainMobile>;
};
