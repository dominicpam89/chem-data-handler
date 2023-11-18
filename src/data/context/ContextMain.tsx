import React from "react";
import { TypePropsChildren } from "../types/props";
import { ContextSidebarInit } from "./ContextSidebar";

export const ContextMain = React.createContext({
  sidebar: ContextSidebarInit,
})

const ContextMainProvider:React.FC<TypePropsChildren> = ({children}) => {
  const [isSidebarShow, setIsSidebarShow] = React.useState<boolean>(false);
  return <>
    <ContextMain.Provider value={{
      sidebar:{
        visible: isSidebarShow,
        showSidebar: ()=>setIsSidebarShow(true),
        hideSidebar: ()=>setIsSidebarShow(false)
      }
    }}>
      {children}
    </ContextMain.Provider>
  </>
}
 
export default ContextMainProvider;