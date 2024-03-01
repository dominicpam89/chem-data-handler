import { TPubchemInputFilter } from "../utils/pubchem/input-filter";
import { pubchemGetURL } from "../utils/pubchem/method";
import { getError } from "./errors";

export const PUBCHEM_BASE_API = "https://pubchem.ncbi.nlm.nih.gov/rest/pug"

export const getCompound = async (byType:TPubchemInputFilter, inputSearchVal:string)=>{
  const url = pubchemGetURL("compound", byType, inputSearchVal)
  const response = await fetch(url)
  if(!response.ok){
    const error = getError(response)
    throw error
  }
  const data = await response.json()
  return data
}