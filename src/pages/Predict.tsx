import SearchBar from "./Predict/SearchBar";
import UILoader from "../UI/Loader";
import { useGetCompounds } from "../data/hooks/useGetCompounds";
import { Container } from "./Predict.styled";
import { useContext } from "react";
import { ContextMain } from "../data/context/main";
import Compounds from "./Predict/Compounds";

const PagePredict = () => {
  const {searchBar} = useContext(ContextMain).compound.predict
  searchBar
  const {compoundsData, compoundsState} = useGetCompounds()
  return (
		<Container>
			{compoundsState.isLoading && <UILoader />}
			{compoundsData.data && <SearchBar data={compoundsData.data} />}
      {compoundsData.data && <Compounds data={compoundsData.data} />}
		</Container>
  )
}
 
export default PagePredict;