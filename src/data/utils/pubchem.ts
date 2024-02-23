export const PUBCHEM_BASE_API = "https://pubchem.ncbi.nlm.nih.gov/rest/pug"

export type TType = "compound"|"substance"
export type TInputSearch = "cid"|"name"|"smiles"
export const inputSearchOptions:{val:TInputSearch, text:string}[] = [
  {val: "cid", text:"By CID"},
  {val: "name", text:"By Name"},
  {val: "smiles", text:"By SMILES"},
]

export const pubchemGetURL = (dataType:TType="compound", inputBy: TInputSearch, inputByVal:string)=>{
  
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