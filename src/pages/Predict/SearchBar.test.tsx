import { Typography, AutocompleteRenderInputParams, TextField, Autocomplete, Box } from "@mui/material"
import { useContext } from "react"
import { TypeCompound } from "../../data/context/compound"
import { TypeSearchBarSelectedValue } from "../../data/context/compound/searchBar"
import { ContextMain } from "../../data/context/main"

interface ITestSearchBar {
	data: TypeCompound[]
}
const TestSearchBar:React.FC<ITestSearchBar> = ({data}) => {
	const {
		predict: { searchBar },
	} = useContext(ContextMain).compound
	return (
		<Autocomplete
			value={searchBar.selectedValue}
			onChange={(event: any, newValue: TypeSearchBarSelectedValue) => {
				event
				searchBar.setSelectedValue(newValue)
			}}
			inputValue={searchBar.displayValue}
			onInputChange={(event, newInputValue) => {
				event
				searchBar.setDisplayValue(newInputValue)
			}}
			disablePortal
			id="compounds-search-field"
			options={data}
			getOptionLabel={(option) => option.trivial_name}
			sx={{ width: "100%" }}
			renderOption={(props, option) => (
				<TestRenderOption key={option.pk} props={props} option={option} />
			)}
			renderInput={(params) => (
				<TestRenderInput key={params.id} params={params} />
			)}
		/>
	)
}

export default TestSearchBar

interface ITestRenderOption {
	props: React.HTMLAttributes<HTMLLIElement>
	option: TypeCompound
}
const TestRenderOption: React.FC<ITestRenderOption> = ({ props, option }) => {
	return (
		<Box component="li" {...props}>
			<Box
				component="span"
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="body1" component="h3">
					{option.trivial_name}
				</Typography>
				<Typography
					variant="body2"
					component="h5"
					fontSize={12}
					sx={{ opacity: 0.6 }}
				>
					{option.smiles}
				</Typography>
			</Box>
		</Box>
	)
}

interface ITestRenderInput {
	params: AutocompleteRenderInputParams
}
const TestRenderInput: React.FC<ITestRenderInput> = ({ params }) => {
	return <TextField {...params} label="Search Compounds" />
}