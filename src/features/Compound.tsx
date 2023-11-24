import { useNavigate } from "react-router-dom"
import { Typography, Box, styled } from "@mui/material"
import { ButtonPrimary } from "../UI/Button"
import UIContainer from "../UI/Container"

const Content = styled(Box)(({theme})=>({
   display:"flex",
   flexDirection: "column",
   gap: theme.spacing(2),
}))

const CompoundOperation = () => {
   const navigate = useNavigate()
   return (
      <>
         <UIContainer>
            <Content>
               <ButtonPrimary variant="outlined" sx={{width:"200px"}} onClick={()=>navigate("/")}>Back</ButtonPrimary>
               <Typography>Compound Operation</Typography>
            </Content>
         </UIContainer>
      </>
   )
}

export default CompoundOperation
