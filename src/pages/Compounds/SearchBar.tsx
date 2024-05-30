import Autocomplete from "@mui/material/Autocomplete";
import { memo, useContext, useState } from "react";
import { ContextMain } from "../../data/context/main";
import { TypeCompound } from "../../data/context/compound";
import { TypeSearchBarSelectedValue } from "../../data/context/compound/searchBar";
import { BoxContainer, TrivialName, CasNumber } from "./SearchBar/RenderOption";
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
	data: TypeCompound[];
}

const AutoCompleteComp: React.FC<Props> = ({ data }) => {
	const [open, setOpen] = useState(false);
	const { searchBar } = useContext(ContextMain).compound.view;
	return (
		<Autocomplete
			sx={{ width: "100%" }}
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			clearOnBlur={false}
			value={searchBar.selectedValue}
			onChange={(_, newValue: TypeSearchBarSelectedValue) => {
				console.log(newValue);
				searchBar.setSelectedValue(newValue);
				// if (newValue) searchBar.setDisplayValue(newValue.trivial_name);
			}}
			inputValue={searchBar.displayValue}
			onInputChange={(_, newInputValue) => {
				searchBar.setDisplayValue(newInputValue);
			}}
			id="compounds-search-field"
			options={data}
			getOptionLabel={(option) => option.trivial_name}
			renderOption={(props, option) => {
				return (
					<BoxContainer key={option.pk} props={props}>
						<TrivialName>{option.trivial_name}</TrivialName>
						<CasNumber>{option.cas_number}</CasNumber>
					</BoxContainer>
				);
			}}
			renderInput={(params) => (
				<TextField {...params} label="Search Compounds" />
			)}
		/>
	);
};

const SearchBar: React.FC<Props> = ({ data }) => {
	const navigate = useNavigate();
	return (
		<Stack direction="row" spacing={1}>
			<AutoCompleteComp data={data} />
			<Button
				variant="outlined"
				size="small"
				onClick={() => navigate("/compounds/add")}
			>
				Add Compound
			</Button>
		</Stack>
	);
};

export default memo(SearchBar);
