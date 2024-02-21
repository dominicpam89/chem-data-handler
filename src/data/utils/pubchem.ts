export const PUBCHEM_BASE_API = "https://pubchem.ncbi.nlm.nih.gov/rest/pug"

export enum EInputSearch{
  "Identifier"="cid",
  "Name"="name",
  "StructureIdentity"="smiles",
}

export type TType = "compound"|"substance"
export type TInputSearch = "cid"|"name"|"smiles"

export const pubchemGetURL = (dataType:TType, inputBy: TInputSearch, inputByVal:string)=>{
  
  /* 
    target return URL:
      https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/1000/json
      https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/abothyl/json
      https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCCCOCC/json
    abstract URL:
      PUBCHEM_BASE_API/dataType/inputBy/inputByVal/json
  */

  let URL=""
  URL+=PUBCHEM_BASE_API
  URL+="/"
  URL+=dataType
  URL+="/"
  URL+=inputBy
  URL+="/"
  URL+=inputByVal
  URL+="/json"
  return URL

}