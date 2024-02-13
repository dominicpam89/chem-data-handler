import { TableHead, TableRow, TableCell, Typography } from "@mui/material"

const TableHeadComponent = ()=>{
  return (
		<TableHead>
			<TableRow>
				<TableCell>
					<Typography variant="h5" component="h2">Attribute</Typography>
				</TableCell>
				<TableCell>
					<Typography variant="h5" component="h2">Value</Typography>
				</TableCell>
			</TableRow>
		</TableHead>
  )
}

export default TableHeadComponent