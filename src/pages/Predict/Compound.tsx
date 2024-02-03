import { useContext } from "react";
import { ContextMain } from "../../data/context/main";
import { Table, TableBody } from "@mui/material";
import Container from "./Compound/Container";
import TableHeadComponent from "./Compound/TableHeadComponent";
import TableList from "./Compound/TableList";
import Buttons from "./Compound/Buttons";

const PredictCompound = () => {
  const {searchBar} = useContext(ContextMain).compound.predict
  const {selectedValue} = searchBar
  const keyPairArr = selectedValue ? Object.entries(selectedValue) : []
  return (
		<Container>
			<Table aria-label="simple table">
				<TableHeadComponent />
				<TableBody>
					{keyPairArr.map((row) => <TableList key={row[0]} row={row} />)}
				</TableBody>
			</Table>
			<Buttons />
		</Container>
  )
}
 
export default PredictCompound;