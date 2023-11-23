import { useContext } from "react"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import UICard from "../../UI/Card"
import { styled, Typography } from "@mui/material"

const StyledUICard = styled(UICard)(({ theme }) => ({
   maxWidth: "100%",
   width: "100%",
   padding: theme.spacing(2),
   [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
   },
   [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8),
   },
}))

const HomeUserDisplaySearch = () => {
   const context = useContext(ContextHomeUser)
   return (
      <>
         {context.compoundSearch.val !== null && (
            <StyledUICard id="displays-search">
               <Typography variant="h4" component="h2">
                  {context.compoundSearch.val?.common_name}
               </Typography>
               <Typography variant="h2">{context.compoundSearch.val?.chemical_compound}</Typography>
               <Typography variant="h6">{context.compoundSearch.val?.formula}</Typography>
            </StyledUICard>
         )}
      </>
   )
}

export default HomeUserDisplaySearch
