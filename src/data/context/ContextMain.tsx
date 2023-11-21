import { createContext, useState } from "react";
import { TypePropsChildren } from "../types/props";
import { ContextSidebarInit } from "./ContextSidebar";
import { ContextMUIThemeInit } from "./ContextMUITheme";
import { useMUIThemeHooks } from "./ContextMUITheme";

export const ContextMain = createContext({
  sidebar: ContextSidebarInit,
  theme: ContextMUIThemeInit,
})

const ContextMainProvider:React.FC<TypePropsChildren> = ({children}) => {
  const [isSidebarShow, setIsSidebarShow] = useState<boolean>(false);
  const {current,changeTheme} = useMUIThemeHooks()
  return <>
    <ContextMain.Provider value={{
      sidebar:{
        visible: isSidebarShow,
        showSidebar: ()=>setIsSidebarShow(true),
        hideSidebar: ()=>setIsSidebarShow(false)
      },
      theme:{current,changeTheme}
    }}>
      {children}
    </ContextMain.Provider>
  </>
}
 
export default ContextMainProvider;