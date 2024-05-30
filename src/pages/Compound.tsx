import TableHeadComponent from "./Compound/TableHeadComponent";
import TableList from "./Compound/TableList";
import Buttons from "./Compound/Buttons";
import CompoundImage from "./Compound/Image";
import UILoader from "../UI/Loader";
import { Container } from "./Compounds.styled";
import { useGetCompound } from "../data/hooks/useGetCompound";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";

const PageCompound = () => {
	const { compoundData, compoundState } = useGetCompound();
	const data = compoundData.data || null;
	/* 
		transform data:Compound object 
		into key-values pair array
	*/
	const keyPairArr = data ? Object.entries(data) : [];

	/* Conditional Render */
	if (compoundState.isLoading) return <UILoader />;
	if (compoundState.isError) return <p>Error</p>;
	if (data) {
		return (
			<Container>
				<CompoundImage picNum={data.pk} picInfo={data.trivial_name} />
				<TableContainer component={Paper} sx={{ padding: 6 }}>
					<Table aria-label="simple table">
						<TableHeadComponent />
						<TableBody>
							{keyPairArr.map((row) => (
								<TableList key={row[0]} row={row} />
							))}
						</TableBody>
					</Table>
					<Buttons />
				</TableContainer>
			</Container>
		);
	}
};

export default PageCompound;
