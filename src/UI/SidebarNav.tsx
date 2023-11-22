import { useContext } from "react"
import { ContextMain } from "../data/context/ContextMain"
import UIModal from "./Modal"
import { utilsUserNavbarList } from "../utils/navbar"
import UISidebarList from "./Sidebar/List"
import UISidebarHeader from "./Sidebar/Header"
import UISidebarListLogout from "./Logout"
import { styled } from "@mui/material"

const StyledUl = styled("ul")(({ theme }) => ({
   width: "100%",
   marginTop: theme.spacing(4),
   display: "flex",
   flexDirection: "column",
   gap: theme.spacing(2),
}))

const UISidebarNav: React.FC = () => {
   const context = useContext(ContextMain)
   return (
      <>
         <UIModal onClose={context.sidebar.hideSidebar}>
            <UISidebarHeader />
            <StyledUl>
               {utilsUserNavbarList.map((list) => {
                  return (
                     <UISidebarList key={list.tag} icon={list.icon} link={list.link} tag={list.tag} text={list.text} />
                  )
               })}
               <UISidebarListLogout />
            </StyledUl>
         </UIModal>
      </>
   )
}

export default UISidebarNav
