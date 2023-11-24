import { createContext, useState } from "react";
import { TypePropsChildren } from "../types/props";
import { ContextCompoundInit, useHooksContextCompoundUI } from "./ContextCompound";
import { ContextSidebarInit } from "./ContextSidebar";
import { ContextMUIThemeInit, useMUIThemeHooks } from "./ContextMUITheme";

export const ContextMain = createContext({
  sidebar: ContextSidebarInit,
  theme: ContextMUIThemeInit,
  compound: ContextCompoundInit
})

const ContextMainProvider:React.FC<TypePropsChildren> = ({children}) => {
  const [isSidebarShow, setIsSidebarShow] = useState<boolean>(false);
  const {current,changeTheme} = useMUIThemeHooks()
  const modalFormNew = useHooksContextCompoundUI()
  return <>
    <ContextMain.Provider value={{
      sidebar:{
        visible: isSidebarShow,
        showSidebar: ()=>setIsSidebarShow(true),
        hideSidebar: ()=>setIsSidebarShow(false)
      },
      theme:{current,changeTheme},
      compound:{
        UI:{modalFormNew}
      }
    }}>
      {children}
    </ContextMain.Provider>
  </>
}
 
export default ContextMainProvider;