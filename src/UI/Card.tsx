import { styled, Paper } from "@mui/material"

const UICard = styled(Paper)(({theme})=>{
  return {
    maxWidth: "480px",
    margin: "0 auto",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    [theme.breakpoints.up("sm")]:{
      padding: theme.spacing(3)
    },
    [theme.breakpoints.up("md")]:{
      padding: theme.spacing(4)
    },
  }
}) 
export default UICard;