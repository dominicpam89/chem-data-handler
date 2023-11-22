import { TypeSidebarNavProps } from "../../data/types/props";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material"
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
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.grey[200]
    }
}))

const UISidebarNavPersistList:React.FC<TypeSidebarNavProps> = ({icon,link,tag,text}) => {
  return (
    <li key={tag}>
      <StyledNavLink
        to={link}
      >
        {
          <IconContext.Provider value={{ style: {height: 16, width: 16} }}>
            {icon}
          </IconContext.Provider>
        }
        <span aria-label="link-text">{text}</span>
      </StyledNavLink>
    </li>
  );
};

export default UISidebarNavPersistList;
