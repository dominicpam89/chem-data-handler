import { Autocomplete, Box, TextField } from "@mui/material"
import { IData } from "../Predict"

interface Props {
	data: IData[]
}

const SearchBar: React.FC<Props> = ({ data }) => {
	return (
		<Autocomplete
      fullWidth
			options={data}
      getOptionLabel={(option)=>option.trivial_name}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.pk}>
          {option.trivial_name}
        </Box>
      )}
			renderInput={(params) => {
        return <TextField
          {...params}
          label="Choose a compound"
        />
      }}
		/>
	)
}

export default SearchBar
