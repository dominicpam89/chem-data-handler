import React from 'react';
import { ContextMain } from '../../data/context/ContextMain';
import { InterfaceSidebarNavProps } from "../../data/interfaces/props";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";

const UISidebarNavPersistList:React.FC<InterfaceSidebarNavProps> = ({icon,link,tag,text}) => {
  const context = React.useContext(ContextMain);
  const navlinkClass = (isActive:boolean)=>{
    const equivState = 'w-full pl-8 py-2 flex flex-row space-x-2 items-center';
    return isActive ? `bg-primary-600 text-white ${equivState}`:equivState;
  }
  return (
    <li key={tag}>
      <NavLink
        to={link}
        className={({isActive})=>navlinkClass(isActive)}
        onClick={context.sidebar.hideSidebar}
      >
        {
          <IconContext.Provider value={{ className: "h-4 w-4" }}>
            {icon}
          </IconContext.Provider>
        }
        <span aria-label="link-text">{text}</span>
      </NavLink>
    </li>
  );
};

export default UISidebarNavPersistList;