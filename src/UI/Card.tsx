import { styled, Paper } from "@mui/material"

{/* <div aria-label="UICard" className="p-4 md:p-8 lg:p-12 flex flex-col gap-4 shadow-md border border-gray-200"> */}
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