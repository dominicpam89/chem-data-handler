import { TableHead, TableRow, TableCell } from "@mui/material"

const TableHeadComponent = ()=>{
  return (
		<TableHead>
			<TableRow>
				<TableCell>Attribute</TableCell>
				<TableCell>Value</TableCell>
			</TableRow>
		</TableHead>
  )
}

export default TableHeadComponent