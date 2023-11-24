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

// Demo Purposes
export const usePredictChem = ()=>{
   const {isPending, mutate, data, isSuccess, isError, error} = useMutation({
      mutationFn: ()=>serviceRunPrediction(),
   })
   return {isPending, mutate, data, isSuccess, isError, error}
}
