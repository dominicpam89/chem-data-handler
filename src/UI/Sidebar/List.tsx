import { useContext } from 'react';
import { styled } from "@mui/material"
import { ContextMain } from '../../data/context/ContextMain';
import { TypeSidebarNavProps } from "../../data/types/props";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";

const StyledNavLink = styled(NavLink)(({theme})=>({
    width: "100%",
    padding: `${theme.spacing(1)} 0`,
    paddingLeft: theme.spacing(5),
    display: "Flex",
    flexDirection: "row",
    gap: theme.spacing(1),
    alignItems: "center",
    "&.active":{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[100]
    }
}))

const UISidebarList:React.FC<TypeSidebarNavProps> = ({icon,link,tag,text}) => {
  const context = useContext(ContextMain);
  return (
    <li key={tag}>
      <StyledNavLink
        to={link}
        onClick={context.sidebar.hideSidebar}
      >
        {
          <IconContext.Provider value={{ className: "h-4 w-4" }}>
            {icon}
          </IconContext.Provider>
        }
        <span aria-label="link-text">{text}</span>
      </StyledNavLink>
    </li>
  );
};

export default UISidebarList;
