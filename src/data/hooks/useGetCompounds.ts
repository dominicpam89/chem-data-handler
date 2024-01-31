import { useQuery } from "@tanstack/react-query"
import { getCompounds } from "../services/compound"

export const useGetCompounds = ()=>{
  const {data,error,isLoading,isError,isSuccess} = useQuery({
    queryKey: ["compounds"],
    queryFn: getCompounds
  })
  const compoundsState = {isLoading, isError, isSuccess}
  const compoundsData = {data, error}
  return {compoundsState, compoundsData}
}