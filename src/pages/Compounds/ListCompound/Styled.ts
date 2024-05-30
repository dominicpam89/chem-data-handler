import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const DataGridStyled = styled(DataGrid)(({}) => ({
	"width": "100%",
	"& .MuiDataGrid-columnHeader:focus": {
		outline: "none",
	},
	"& .MuiDataGrid-row": {
		cursor: "pointer",
	},
	"& .MuiDataGrid-cell:focus": {
		outline: "none",
	},
	"& .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
		{
			wordWrap: "break-word",
			whiteSpace: "collapse",
		},
	"& .MuiDataGrid-menuIconButton": {
		minWidth: "56px",
		paddingY: "16px",
	},
}));
