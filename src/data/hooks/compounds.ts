import { useQuery } from "@tanstack/react-query"
import { getChems } from "../../services/predictChem.dummy"

export const useChems = () => {
   const chems = useQuery({
      queryKey: ["chems"],
      queryFn: getChems,
   })
   return chems
}
