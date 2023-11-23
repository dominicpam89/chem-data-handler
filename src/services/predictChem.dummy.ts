import { TypeChems } from "../data/types/query-result"

export const getChems = async () => {
   const response = await fetch("https://charming-plum-handbag.cyclic.app/compounds")
   if (!response.ok) throw new Error(`Couldn't access comodeginicity database!`)
   const data = await response.json()
   return data
}

// DUMMY
export const serviceRunPrediction = async (item: TypeChems | null) => {
   const response = await fetch(`https://charming-plum-handbag.cyclic.app/compounds/${item?.id}`)
    if (!response.ok) throw new Error(`Couldn't running prediction!`)
   const data = await response.json()
   return data
}
