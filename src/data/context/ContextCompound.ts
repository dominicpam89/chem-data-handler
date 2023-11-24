import { useState } from "react"

export const ContextCompoundInit = {
   UI: {
      modalFormNew: {
         visibility: false,
         show: () => {},
         hide: () => {},
      },
   },
}

export const useHooksContextCompoundUI = ()=>{
    const [formNewVisibile, setFormNewVisible] = useState(false)
    const modalFormNew = {
      visibility: formNewVisibile,
      hide: ()=>setFormNewVisible(false),
      show: ()=>setFormNewVisible(true)
    }
    return modalFormNew
}