import Autocomplete from '@mui/material/Autocomplete';
import { memo, useContext } from 'react';
import { ContextMain } from '../../data/context/main';
import { TypeCompound } from '../../data/context/compound';
import { TypeSearchBarSelectedValue } from '../../data/context/compound/searchBar';
import RenderInput from './SearchBar/RenderInput';
import { BoxContainer, CasNumber, TrivialName } from './SearchBar/RenderOption';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBarContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate();
	return (
		<Stack direction="row" spacing={1}>
			{children}
			<Button
				variant="outlined"
				size="small"
				onClick={() => navigate('/compounds/add')}
			>
				Add Compound
			</Button>
		</Stack>
	);
};

interface Props {
	data: TypeCompound[];
}

const SearchBar: React.FC<Props> = ({ data }) => {
	const {
		predict: { searchBar },
	} = useContext(ContextMain).compound;
	return (
		<SearchBarContainer>
			<Autocomplete
				sx={{ width: '100%' }}
				value={searchBar.selectedValue}
				onChange={(
					event: any,
					newValue: TypeSearchBarSelectedValue
				) => {
					event;
					searchBar.setSelectedValue(newValue);
				}}
				inputValue={searchBar.displayValue}
				onInputChange={(event, newInputValue) => {
					event;
					searchBar.setDisplayValue(newInputValue);
				}}
				id="compounds-search-field"
				options={data}
				getOptionLabel={(option) => option.trivial_name}
				renderOption={(props, option) => {
					props;
					return (
						<BoxContainer key={option.pk} props={props}>
							<TrivialName>
								{option.trivial_name}
							</TrivialName>
							<CasNumber>
								{option.cas_number}
							</CasNumber>
						</BoxContainer>
					);
				}}
				renderInput={(params) => (
					<RenderInput key={params.id} params={params} />
				)}
			/>
		</SearchBarContainer>
	);
};

export default memo(SearchBar);
