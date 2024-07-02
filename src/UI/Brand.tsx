import { Typography, styled } from "@mui/material";
import { BiSolidAnalyse } from "react-icons/bi";

/**
 * A custom styled component using react-icons's icon with inherited color.
 * This component serves as a base component for other specific brand icons.
 * @component
 * @example
 * const BrandIconExtension = styled(BrandIcon)(() => ({
 *   fontSize: "20px",
 *   color: "red"
 * }));
 */
export const BrandIcon = styled(BiSolidAnalyse)(({}) => ({
	fontSize: "24px",
	color: "inherit",
}));

/**
 * A custom styled component using react-icons's icon with inherited color.
 * Specifically designed for use in mobile navigation bars.
 * @component
 */
export const MobileNavbarBrandIcon = styled(BiSolidAnalyse)(({}) => ({
	fontSize: "24px",
	color: "inherit",
}));

/**
 * A custom styled component using react-icons's icon with inherited color.
 * Specifically designed for use in Desktop Navigation component.
 * @component
 */
export const DesktopNavbarBrandIcon = styled(BiSolidAnalyse)(({ theme }) => ({
	fontSize: "32px",
	color: theme.palette.primary.contrastText,
}));

/**
 * A custom styled component using react-icons's icon with inherited color.
 * Specifically designed for Auth page
 * @component
 */
export const AuthBrandIcon = styled(BiSolidAnalyse)(({ theme }) => ({
	fontSize: "36px",
	color: theme.palette.primary.main,
	[theme.breakpoints.up("md")]: {
		fontSize: "54px",
	},
}));

/**
 * A custom styled component using react-icons's icon with inherited color.
 * Specifically designed for Sidebar navigation in Desktop Navigation component
 * @component
 */
export const SidebarBrandIcon = styled(BiSolidAnalyse)(({ theme }) => ({
	fontSize: "36px",
	color: theme.palette.primary.main,
}));

/**
 * Interface for BrandText component props.
 * @type {Object} IBrandText
 * @component BrandText
 * @property {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"body1"|"body2"} variant - The typography variant to be used in @mui/material/Typography component.
 * @property {string|any} color - The color of the text to be used in @mui/material/Typography component.
 */
interface IBrandText {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
	color: string | any;
}
export const BrandText: React.FC<IBrandText> = ({ variant, color }) => {
	return (
		<Typography component="h1" variant={variant} color={color}>
			{import.meta.env.VITE_APP_NAME}
		</Typography>
	);
};
