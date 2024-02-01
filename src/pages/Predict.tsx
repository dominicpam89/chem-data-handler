import { useGetCompounds } from "../data/hooks/useGetCompounds";
import SearchBar from "./Predict/SearchBar";

const PagePredict = () => {
  const {compoundsData} = useGetCompounds()
  return <>
    {compoundsData.data && <SearchBar data={compoundsData.data} />}
  </>
}
 
export default PagePredict;