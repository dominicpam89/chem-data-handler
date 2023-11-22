import React from 'react'
import { styled, Box } from "@mui/material"
import { utilsUserNavbarList } from '../utils/navbar'
import UISidebarNavPersistHeader from './SidebarNavPersist/Header'
import UISidebarNavPersistList from './SidebarNavPersist/List'
import UISidebarListLogout from './Logout';

const StyledBox = styled(Box)(({theme})=>({
  position: "fixed",
  top: "0",
  left: "0",
  width: "220px",
  height: "100%",
  paddingTop: theme.spacing(4),
  background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.common.white,
  display: "none",
  [theme.breakpoints.up("sm")]:{
    display: "block"
  },

}))

const StyledUl = styled("ul")(({theme})=>({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: theme.spacing(6),
  width: "100%"
}))

const UISidebarPersist:React.FC = ()=>{
  return <>
      <StyledBox>
        <UISidebarNavPersistHeader />
        <StyledUl>
          {utilsUserNavbarList.map(list=>{
            return (
              <UISidebarNavPersistList
                key={list.tag}
                icon={list.icon}
                link={list.link}
                tag={list.tag}
                text={list.text}
              />
            );
          })}
          <UISidebarListLogout />
        </StyledUl>
      </StyledBox>
  </>
}

export default UISidebarPersist