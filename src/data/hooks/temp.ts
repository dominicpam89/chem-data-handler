import { useState, useEffect, useContext } from "react"
import { ContextHomeUser } from "../context/ContextHomeUser"

export const useHooksDisplaySearch = () => {
   const context = useContext(ContextHomeUser)
   const [displayError, setDisplayError] = useState<boolean>(false)
   const [displayResult, setDisplayResult] = useState<boolean>(false)
   useEffect(() => {
      if (context.predictCompound.onPredictState.error && context.compoundSearch.val !== null) setDisplayError(true)
      if (context.predictCompound.onPredictState.success && context.compoundSearch.val !== null) setDisplayResult(true)
   }, [
      context.predictCompound.onPredictState.error,
      context.predictCompound.onPredictState.success,
      setDisplayError,
      setDisplayResult,
   ])
   return { displayError, displayResult, setDisplayError, setDisplayResult }
}
