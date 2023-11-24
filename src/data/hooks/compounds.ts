import { useState } from "react"
import { useQuery, useMutation } from "@tanstack/react-query"
import { getChems } from "../../services/predictChem.dummy"
import { serviceRunPrediction } from "../../services/predictChem.dummy"

export const useChems = () => {
   const chems = useQuery({
      queryKey: ["chems"],
      queryFn: getChems,
   })
   return chems
}

export const usePredictChem = ()=>{
   const [result,setResult] = useState<any>(null)
   const [error, setError] = useState<Error|null>(null)
   const {isPending, mutate} = useMutation({
      mutationFn: ()=>serviceRunPrediction(),
      onSuccess: (data)=>{
         setResult(data)
      },
      onError:(error)=>{
         setError(error)
      }
   })
   return {isPending, mutate, result, error}
}
