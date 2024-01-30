import {
	styled,
	Paper as PaperDefault,
	Box as BoxDefault,
	Button as B,
	ButtonProps,
} from "@mui/material"

export const AuthCard = styled(PaperDefault)(({ theme }) => ({
	maxWidth: "480px",
	width: "100%",
	margin: "0 auto",
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3),
	[theme.breakpoints.up("sm")]: {
		padding: theme.spacing(3),
	},
	[theme.breakpoints.up("md")]: {
		padding: theme.spacing(4),
	},
}))

export const AuthCardHeader = styled(BoxDefault)(({ theme }) => ({
	width: "100%",
	padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}))

export const AuthCardContent = styled(BoxDefault)(() => ({}))

export const AuthForm = styled("form")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3),
}))

const Button = styled(B)<ButtonProps>(({ theme }) => ({
	borderRadius: theme.spacing(2),
	transition: "all ease-in-out 300ms",
	"&:hover": {
		transform: "scale(1.03)",
	},
	"&:active": {
		transform: "scale(0.95)",
	},
}))

export const ButtonPrimary = styled(Button)<ButtonProps>(
	({ theme, variant }) => {
		if (variant === "contained")
			return {
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				"&:hover": {
					backgroundColor: theme.palette.primary.light,
				},
			}
		if (variant === "outlined")
			return {
				backgroundColor: "transparent",
				border: `${theme.palette.primary.main} 1px solid`,
				color: theme.palette.primary.main,
				"&:hover": {
					opacity: 0.8,
				},
			}
		if (variant === "text")
			return {
				backgroundColor: "transparent",
				color: theme.palette.primary.main,
				"&:hover": {
					color: theme.palette.primary.light,
				},
			}
	}
)
