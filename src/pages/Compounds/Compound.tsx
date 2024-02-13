import { useContext } from "react";
import { ContextMain } from "../../data/context/main";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import TableHeadComponent from "./Compound/TableHeadComponent";
import TableList from "./Compound/TableList";
import Buttons from "./Compound/Buttons";
import CompoundImage from "./Compound/Image";

const Compound = () => {
  const {searchBar} = useContext(ContextMain).compound.predict
  const {selectedValue} = searchBar
  const keyPairArr = selectedValue ? Object.entries(selectedValue) : []
  return (
		<>
			<CompoundImage
				picNum={selectedValue!.pk}
				picInfo={selectedValue!.trivial_name}
			/>
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
		</>
  )
}
 
export default Compound;