import { createContext, useState } from "react"
import { TypePropsChildren } from "../types/props"
import { TypeChems } from "../types/query-result"
import { usePredictChem } from "../hooks/compounds"

type TypeContextHomeUser = {
   compoundSearch: {
      val: TypeChems | null
      setVal: (val: TypeChems | null) => void
   }
   selectedHistory: {
      val: TypeChems[]
      setVal: (val: TypeChems) => void
      remove: (val: TypeChems) => void
   }
   // Demo Purposes
   predictCompound: {
      onPredict: () => void
      onPredictState: {
         pending: boolean,
         error: boolean,
         success: boolean
      },
      data: any,
      error: Error|null
   }
}

const context: TypeContextHomeUser = {
   compoundSearch: {
      val: null,
      setVal: (val) => {
         val
      },
   },
   selectedHistory: {
      val: [],
      setVal: (val) => {
         val
      },
      remove: (val) => {
         val
      },
   },
   // Demo Purposes
   predictCompound: {
      onPredict: () => {},
      onPredictState: {
         pending: false,
         error: false,
         success: false,
      },
      data: null,
      error: null
   },
}

export const ContextHomeUser = createContext(context)

export const ContextHomeUserProvider: React.FC<TypePropsChildren> = ({ children }) => {
   const [compoundSearch, setCompoundSearch] = useState<TypeChems | null>(null)
   const [selectedHistory, setSelectedHistory] = useState<TypeChems[]>([])
   // Demo Purposes
   const {
      mutate: onPredictCompound,
      isPending: onPredictPending,
      isError: onPredictIsError,
      isSuccess: onPredictSuccess,
      data: onPredictData,
      error: onPredictErrror,
   } = usePredictChem()
   return (
      <ContextHomeUser.Provider
         value={{
            compoundSearch: {
               val: compoundSearch,
               setVal: (val) => setCompoundSearch(val),
            },
            selectedHistory: {
               val: selectedHistory,
               setVal: (val) => setSelectedHistory((ps) => [...ps, val]),
               remove: (val) => setSelectedHistory((ps) => ps.filter((item) => item.id !== val.id)),
            },
            // Demo Purposes
            predictCompound: {
               onPredict: onPredictCompound,
               onPredictState: {
                  pending: onPredictPending,
                  error: onPredictIsError,
                  success: onPredictSuccess
               },
               data: onPredictData,
               error: onPredictErrror
            },
         }}
      >
         {children}
      </ContextHomeUser.Provider>
   )
}
