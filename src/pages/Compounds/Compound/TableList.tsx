import { Box, Stack, TableCell, TableRow, Typography, styled, useTheme } from "@mui/material"

/* 
	-------------------------------------------------
	PARTIAL COMPONENT
*/
interface IComponentCommon{
	keyObject:string
	valObject:string|number
}

interface IComponentCasNumber{
	valObject: string
}

interface IComponentComedogenicity{
	keyObject: string
	valObject: string
}

const ComponentCommon:React.FC<IComponentCommon> = ({keyObject, valObject})=>{
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

const ComponentCasNumber:React.FC<IComponentCasNumber> = ({valObject})=>{
	let casNums:string[] = []
	const isValCasMoreThanOne = valObject.includes("["||"]")
	casNums = isValCasMoreThanOne
		? valObject
				.replace(/[\[\]']/g, "")
				.split(",")
		: [valObject]

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



const ComedogenicityIndicator = styled(Box)(() => ({
	height: 24,
	width: 24,
	borderRadius: 9999,
}))

const ComponentComedogenicity:React.FC<IComponentComedogenicity> = ({keyObject,valObject})=>{
	const theme = useTheme()
	const color = valObject==="0"
		? "success"
		: valObject==="1"
		? "warning"
		: valObject==="2"
		? "error"
		: "grey"
	const level = valObject==="0"
		? "low"
		: valObject==="1"
		? "medium"
		: valObject==="2"
		? "high"
		: "none / unknown / null"
	return (
		<TableRow key={keyObject}>
			<TableCell component="th" scope="row" sx={{ paddingX: 4 }}>
				{keyObject}
			</TableCell>
			<TableCell align="left">
				<Stack spacing={2} direction="row">
					<ComedogenicityIndicator
						className={color}
						sx={{
							backgroundColor:
								color !== "grey"
									? theme.palette[color].main
									: theme.palette[color][400],
						}}
					/>
					<Typography variant="body2">
						{level}
					</Typography>
				</Stack>
			</TableCell>
		</TableRow>
	)
}

/* 
	-------------------------------------------------
	MAIN COMPONENT
*/
interface IProps{
  row: [string, string | number]
}
const TableList:React.FC<IProps> = ({row})=>{
	const key = row[0]
	const val = row[1]
	const isRowCas = key==="cas_number"
	const isRowComedogenicity = key === "comedogenicity_class"
	if(isRowCas) return <ComponentCasNumber valObject={String(val)} />
	if(isRowComedogenicity) return <ComponentComedogenicity keyObject={key} valObject={String(val)} />
	if(!isRowCas && !isRowComedogenicity) return <ComponentCommon keyObject={key} valObject={val} />
}

export default TableList