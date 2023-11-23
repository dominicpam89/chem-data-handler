import { createContext, useState } from "react"
import { TypePropsChildren } from "../types/props"
import { TypeChems } from "../types/query-result"
import { TypeContextHomeUser } from "../types/context"

const context:TypeContextHomeUser = {
  compoundSearch:{
    val: null,
    setVal: (val)=>{val}
  },
  selectedHistory:{
    val: [],
    setVal: (val)=>{val},
    remove: (val)=>{val}
  }
}

export const ContextHomeUser = createContext(context)

export const ContextHomeUserProvider: React.FC<TypePropsChildren> = ({ children }) => {
   const [compoundSearch, setCompoundSearch] = useState<TypeChems | null>(null)
   const [selectedHistory, setSelectedHistory] = useState<TypeChems[]>([])
   return (
      <ContextHomeUser.Provider
         value={{
            compoundSearch: {
               val: compoundSearch,
               setVal: (val) => setCompoundSearch(val),
            },
            selectedHistory: {
              val: selectedHistory,
              setVal: (val)=>setSelectedHistory(ps=>([...ps,val])),
              remove: (val)=>setSelectedHistory(ps=>ps.filter(item=>item.id!==val.id))
            }
         }}
      >
         {children}
      </ContextHomeUser.Provider>
   )
}
