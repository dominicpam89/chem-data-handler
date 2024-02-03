import { TableCell, TableRow } from "@mui/material"

interface IComponentNotCas{
	keyObject:string
	valObject:string|number
}
const ComponentNotCas:React.FC<IComponentNotCas> = ({keyObject, valObject})=>{
	return <TableRow
			key={keyObject}
		>
			<TableCell component="th" scope="row" sx={{ paddingX: 4 }}>
				{keyObject}
			</TableCell>
			<TableCell align="left">
				{valObject}
			</TableCell>
		</TableRow>
}

interface IComponentCasNumber{
	casNums:string[]
}
const ComponentCasNumber:React.FC<IComponentCasNumber> = ({casNums})=>{
	return casNums.map((casNum,index)=>{
		return <TableRow
			key={casNum}
		>
			<TableCell component="th" scope="row" sx={{ paddingX: 4 }}>
				{index===0 ? "CAS Number" : ""}
			</TableCell>
			<TableCell align="left">
				{casNum}
			</TableCell>
		</TableRow>
	})
}


interface IProps{
  row: [string, string | number]
}
const TableList:React.FC<IProps> = ({row})=>{
	const key = row[0]
	const val = row[1]
	let casNums:string[] = []
	const isValCasMoreThanOne = String(val).includes("["||"]")
	if(isValCasMoreThanOne){
		casNums = String(val).replace(/[\[\]']/g,"").split(",")
		return <ComponentCasNumber casNums={casNums} />
	}
	if(!isValCasMoreThanOne) return <ComponentNotCas keyObject={key} valObject={val} />
}

export default TableList