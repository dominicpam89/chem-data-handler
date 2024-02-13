import { useGetCompounds } from "../data/hooks/useGetCompounds"
import { Container } from "./Compounds.styled"
import UILoader from "../UI/Loader"
import SearchBar from "./Compounds/SearchBar"
import ListCompound from "./Compounds/ListCompound"
import Compound from "./Compounds/Compound"
import { useContextMain } from "../data/hooks/useContext"

const PageCompounds = () => {
	const { searchBar } = useContextMain().compound.predict
	const { compoundsData, compoundsState } = useGetCompounds()
	return (
		<Container>
			{compoundsState.isLoading && <UILoader />}
			{compoundsData.data && <SearchBar data={compoundsData.data} />}
			{compoundsData.data && <ListCompound data={compoundsData.data} />}
			{searchBar.selectedValue && <Compound />}
		</Container>
	)
}

export default PageCompounds
