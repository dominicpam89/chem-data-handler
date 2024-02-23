import { useGetCompounds } from "../data/hooks/useGetCompounds"
import UILoader from "../UI/Loader"
import SearchBar from "./Compounds/SearchBar"
import ListCompound from "./Compounds/ListCompound"
import { Box, styled } from "@mui/material"
import { Container } from "./Compounds.styled"

const PageCompounds = () => {
	const { compoundsData, compoundsState } = useGetCompounds()
	return (
		<Container>
			{compoundsState.isLoading && <UILoader />}
			{compoundsData.data && <SearchBar data={compoundsData.data} />}
			{compoundsData.data && <ListCompound data={compoundsData.data} />}
		</Container>
	)
}

export default PageCompounds
