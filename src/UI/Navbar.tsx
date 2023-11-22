import React from "react"
import { styled, Box, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ContextMain } from "../data/context/ContextMain"
import UISidebarNav from "./SidebarNav"
import { MdMenu } from "react-icons/md"
import { BiSolidAnalyse } from "react-icons/bi"
import { IconContext } from "react-icons"

const StyledNav = styled("nav")(({ theme }) => ({
   position: "fixed",
   width: "100%",
   padding: theme.spacing(3),
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   background: `linear-gradient(105deg, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
   color: theme.palette.common.white,
   [theme.breakpoints.up("sm")]: {
      display: "none",
      padding: `${theme.spacing(4)} 0`,
   },
}))

const ButtonBrand = styled("button")(({theme})=>({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1)
}))

const UINavbar = () => {
   const context = React.useContext(ContextMain)
   const navigate = useNavigate()
   const theme = useTheme()
   return (
      <React.Fragment>
         <StyledNav sx={{boxShadow: 2}}>
            <Box aria-label="nav-left" sx={{ height: theme.spacing(3) }}>
               <ButtonBrand aria-label="brand-wrapper" onClick={() => navigate("/")}>
                  <IconContext.Provider value={{ style: { height: theme.spacing(3), width: theme.spacing(3) } }}>
                     <BiSolidAnalyse />
                  </IconContext.Provider>
                  <h1>{import.meta.env.VITE_APP_NAME}</h1>
               </ButtonBrand>
            </Box>
            <Box aria-label="nav-right-mobile" sx={{ height: theme.spacing(3) }}>
               <button onClick={context.sidebar.showSidebar}>
                  <IconContext.Provider value={{ style: { height: theme.spacing(3), width: theme.spacing(3) } }}>
                     <MdMenu />
                  </IconContext.Provider>
               </button>
            </Box>
         </StyledNav>
         {context.sidebar.visible && <UISidebarNav />}
      </React.Fragment>
   )
}

export default UINavbar
