import React from "react";
import { useNavigate } from "react-router-dom";
import { ContextMain } from "../data/context/ContextMain";
import UISidebarNav from "./SidebarNav";
import { MdMenu } from "react-icons/md";
import { BiSolidAnalyse } from 'react-icons/bi';
import { IconContext } from "react-icons";

const UINavbar = () => {
  const context = React.useContext(ContextMain);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <nav className="md:hidden fixed w-full px-4 py-4 md:py-6 flex flex-row justify-between items-center bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-md">
        <div aria-label="nav-left" className="h-6">
          <button
            aria-label="brand-wrapper"
            className="flex flex-row space-x-2"
            onClick={() => navigate("/")}
          >
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <BiSolidAnalyse />
            </IconContext.Provider>
            <h1>{import.meta.env.VITE_APP_NAME}</h1>
          </button>
        </div>
        <div aria-label="nav-right-mobile" className="h-6">
          <button onClick={context.sidebar.showSidebar}>
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <MdMenu />
            </IconContext.Provider>
          </button>
        </div>
      </nav>
      {context.sidebar.visible && <UISidebarNav />}
    </React.Fragment>
  );
};

export default UINavbar;
