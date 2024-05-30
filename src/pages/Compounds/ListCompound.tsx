import { Box } from '@mui/material';
import { TypeCompound } from '../../data/context/compound';
import { useGetParams } from './ListCompound/hook';
import { DataGridStyled } from './ListCompound/Styled';
import { columns } from './ListCompound/Columns';

interface Props {
	data: TypeCompound[];
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
	} = useGetParams(data);

	console.log(filterModel);
	/* render */
	return (
		!searchBar.selectedValue && (
			<Box>
				<DataGridStyled
					rows={data}
					rowHeight={8 * 10}
					getRowId={getRowId}
					columns={columns}
					paginationModel={paginationModel}
					onPaginationModelChange={setPaginationModel}
					pageSizeOptions={pageSizeOptions}
					rowSelectionModel={rowSelectionModel}
					onRowSelectionModelChange={(newSelection) => {
						setRowSelectionModel(newSelection);
					}}
					filterModel={filterModel}
				/>
			</Box>
		)
	);
};

export default ListCompound;
