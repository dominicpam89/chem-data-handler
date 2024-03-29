const URL = "https://charming-plum-handbag.cyclic.app"
import { TypeCompound } from "../context/compound"
import { getError } from "./errors"

export const getCompounds = async ()=>{
  const response = await fetch(URL+"/compounds")
  if(!response.ok){
    const error = getError(response)
    throw error
  }
  const data:TypeCompound[] = await response.json()
  return data
}