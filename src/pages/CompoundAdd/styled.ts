import { Box, InputLabel as InputLabelBase, styled } from "@mui/material"

export const Container = styled(Box)(({theme})=>({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(4),
}))

export const PubChemContainer = styled(Box)(({theme})=>({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(4),
}))

export const Form = styled("form")(({theme})=>({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),
}))

export const InputLabel = styled(InputLabelBase)(({theme})=>({
	backgroundColor: theme.palette.background.default,
	paddingLeft: "8px",
	paddingRight: "8px",
}))