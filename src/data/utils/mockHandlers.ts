import { delay, http, HttpResponse } from "msw"
import { mockJSON_cid_500, mockJSON_name_glucose, mockJSON_smiles_acetone } from "./mockHandlers/mockDataAll"
import { pubchemGetURL } from "./pubchem/method"

export const mockGetCompoundByName = pubchemGetURL("compound", "name", "glucose")
export const mockGetCompoundBySmiles = pubchemGetURL("compound", "smiles", "O=C(C)C")

export const mockResolverCompoundByCidAll = async ()=>{
  await delay(800)
  return HttpResponse.json(mockJSON_cid_500)
}

export const mockResolverCompoundByNameAll = async ()=>{
  await delay(800)
  return HttpResponse.json(mockJSON_name_glucose)
}

export const mockResolverCompoundBySmilesAll = async ()=>{
  await delay(800)
  return HttpResponse.json(mockJSON_smiles_acetone)
}

export const handlers = [
  http.get(mockGetCompoundByName, mockResolverCompoundByNameAll),
  http.get(mockGetCompoundBySmiles, mockResolverCompoundBySmilesAll)
]