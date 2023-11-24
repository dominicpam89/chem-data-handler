import { ContextHomeUserProvider } from "../data/context/ContextHomeUser"
import { useNavigate } from "react-router-dom"
import { Box, Stack, styled } from "@mui/material"
import { ButtonPrimary } from "../UI/Button"
import UIContainer from "../UI/Container"
import UIFeedbackLoading from "../UI/Feedback/Loading"
import { useChems } from "../data/hooks/compounds"
import CompoundSearchBar from "./Compound/SearchBar"
import CompoundDisplayForm from "./Compound/DisplayForm"

const Content = styled(Box)(({theme})=>({
   display:"flex",
   flexDirection: "column",
   gap: theme.spacing(2),
}))

const CompoundOperation = () => {
   const navigate = useNavigate()
   const chems = useChems()
   return (
      <>
         {chems.isLoading && <UIFeedbackLoading />}
         <ContextHomeUserProvider>
            <UIContainer>
               <Content>
                  <ButtonPrimary variant="outlined" sx={{width:"200px"}} onClick={()=>navigate("/")}>Back</ButtonPrimary>
                  {chems?.data?.length > 0 && !chems.isLoading && <Stack direction="column" spacing={3}>
                     <CompoundSearchBar data={chems.data} />
                     <CompoundDisplayForm />
                  </Stack>}
               </Content>
            </UIContainer>
         </ContextHomeUserProvider>
      </>
   )
}

export default CompoundOperation
