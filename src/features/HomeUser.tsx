import { Stack, Box, styled } from "@mui/material"
import UIContainer from "../UI/Container"
import UIFeedbackLoading from "../UI/Feedback/Loading"
import { useChems } from "../data/hooks/compounds"
import HomeUserTitle from "./HomeUser/Title"
import HomeUserSearchBar from "./HomeUser/SearchBar"
import HomeUserDisplaySearch from "./HomeUser/DisplaySearch"
import { ContextHomeUserProvider } from "../data/context/ContextHomeUser"

const ContentBox = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "column",
   gap: theme.spacing(4),
   [theme.breakpoints.up("md")]:{
      display: "grid",
      gridTemplateColumns: "5fr 15fr",
      alignItems: "start",
   }
}))

const HomeUserPage = () => {
   const chems = useChems()
   return (
      <>
         {chems.isLoading && <UIFeedbackLoading />}
         <UIContainer>
            <ContextHomeUserProvider>
               {chems?.data?.length > 0 && !chems.isLoading && (
                  <Stack direction={"column"} spacing={6}>
                     <HomeUserTitle />
                     <ContentBox>
                        <HomeUserSearchBar data={chems.data} />
                        <HomeUserDisplaySearch />
                     </ContentBox>
                  </Stack>
               )}
            </ContextHomeUserProvider>
         </UIContainer>
      </>
   )
}

export default HomeUserPage
