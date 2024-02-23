import { Box } from "@mui/material"
import { TypeCompound } from "../../data/context/compound"
import { useGetParams } from "./ListCompound/hook"
import { DataGridStyled } from "./ListCompound/Styled"
import { columns } from "./ListCompound/Columns"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
	data: TypeCompound[]
}

const ListCompound: React.FC<Props> = ({ data }) => {
	
	/* 
		custom hooks to get all data needed for this component
		regarding of DataGridStyled (Table)
	*/
	const {
		searchBar,
		pageSizeOptions,
		paginationModel,
		rowSelectionModel,
		filterModel,
		setPaginationModel,
		setRowSelectionModel,
		getRowId,
	} = useGetParams(data)

	/* 
		if row in the table is selected,
		navigate to selectedValue in searchBar, 
		with PK as id number for React Router Dom
	*/
	const navigate = useNavigate()
	useEffect(()=>{
		if(searchBar.selectedValue){
			navigate("/compounds/"+searchBar.selectedValue.pk)
		}
	},[searchBar.selectedValue])


	/* render */
	return (
		!searchBar.selectedValue && <Box>
			<DataGridStyled
				rows={data}
				rowHeight={8 * 14}
				getRowId={getRowId}
				columns={columns}
				paginationModel={paginationModel}
				onPaginationModelChange={setPaginationModel}
				pageSizeOptions={pageSizeOptions}
				rowSelectionModel={rowSelectionModel}
				onRowSelectionModelChange={(newSelection) => {
					setRowSelectionModel(newSelection)
				}}
				filterModel={filterModel}
			/>
		</Box>
	)
}

export default ListCompound
