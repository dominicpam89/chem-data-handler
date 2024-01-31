import { useGetCompounds } from "../data/hooks/useGetCompounds";
import SearchBar from "./Predict/SearchBar";

export interface IData {
	pk: number
	trivial_name: string
	cas_number: string
	inci_name: string
	smiles: string
	comedogenicity_class: 1
}

const PagePredict = () => {
  const {compoundsData} = useGetCompounds()
  return <>
    {compoundsData.data && <SearchBar data={compoundsData.data} />}
  </>
}
 
export default PagePredict;