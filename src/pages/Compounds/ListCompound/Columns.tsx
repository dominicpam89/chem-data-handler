import { GridRenderCellParams, GridColDef } from "@mui/x-data-grid";
import { TypeCompound } from "../../../data/context/compound";
import { Box } from "@mui/material";

const cellCasNumberContentInRow = (casNum: string[]) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 3,
			}}
		>
			{casNum.map((num) => {
				return <span key={num}>{num}</span>;
			})}
		</Box>
	);
};

const renderCellCasNumber = (params: GridRenderCellParams) => {
	const { row }: { row: TypeCompound } = params;
	let casNum: string | string[] = row.cas_number;
	if (row.cas_number.includes("[" || "]")) {
		casNum = row.cas_number.replace(/[\[\]']/g, "");
		casNum = casNum.split(",");
		const content = cellCasNumberContentInRow(casNum);
		return content;
	} else if (row.cas_number === "") {
		return "-";
	}
	return casNum;
};

// const renderCellComedogenicity = (params:GridRenderCellParams)=>{
// 	const {row}:{row:TypeCompound} = params
// 	let comedogenicityVal:number|string = row.comedogenicity_class
// 	if(!comedogenicityVal) comedogenicityVal = "-"
// 	return <span>{comedogenicityVal}</span>
// }

export const columns: GridColDef[] = [
	{
		field: "pk",
		headerName: "ID",
		minWidth: 120,
		align: "center",
		headerAlign: "center",
	},
	{ field: "trivial_name", headerName: "Trivial", width: 240 },
	{ field: "inci_name", headerName: "Inci", width: 240 },
	{
		field: "cas_number",
		headerName: "CAS",
		width: 180,
		renderCell: renderCellCasNumber,
	},
	// { field: "smiles", headerName: "Smiles", width: 180 },
	// {
	// 	field: "comedogenicity_class",
	// 	headerName: "Comedogenicity",
	// 	width: 240,
	// 	align: "center",
	// 	renderCell: renderCellComedogenicity,
	// },
];
