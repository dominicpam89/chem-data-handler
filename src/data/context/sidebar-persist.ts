import { useState } from "react"

type TypeContextSidebarPersist = {
  minimize: boolean
  maximizeSidebar: ()=>void
  minimizeSidebar: ()=>void
  toggleSizeSidebar: ()=>void
}

export const ContextSidebarPersist:TypeContextSidebarPersist = {
  minimize: false,
  maximizeSidebar: () => {},
  minimizeSidebar: () => {},
  toggleSizeSidebar: ()=>{}
};

export const useContextSidebarPersist = ()=>{
  const [sidebarMinimize, setSidebarMinimize] = useState<boolean>(false)
  const sidebar = {
    minimize: sidebarMinimize,
    maximizeSidebar: ()=>setSidebarMinimize(false),
    minimizeSidebar: ()=>setSidebarMinimize(true),
    toggleSizeSidebar: ()=>setSidebarMinimize(!sidebarMinimize)
  }
  return sidebar
}