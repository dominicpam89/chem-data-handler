import { styled, Box } from "@mui/material"

export const Container = styled(Box)(({theme})=>({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}))