import { Box } from "@mui/material"
import { TypeCompound } from "../../data/context/compound"
import { useGetParams } from "./Compounds/hook"
import { DataGridStyled } from "./Compounds/Styled"
import { columns } from "./Compounds/Columns"

interface Props {
	data: TypeCompound[]
}

const TestCompounds: React.FC<Props> = ({ data }) => {
	const {
		pageSizeOptions,
		paginationModel,
		rowSelectionModel,
		searchBar,
		setPaginationModel,
		setRowSelectionModel,
		getRowId,
	} = useGetParams(data)

	return (
		<Box>
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
				filterModel={{
					items: [
						{
							field: "trivial_name",
							operator: "contains",
							value: searchBar.selectedValue?.trivial_name,
						},
					],
				}}
			/>
		</Box>
	)
}

export default TestCompounds
