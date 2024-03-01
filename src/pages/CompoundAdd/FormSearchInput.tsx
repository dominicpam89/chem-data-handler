import { FormControl, FormHelperText, InputLabel, OutlinedInput, styled } from "@mui/material";
import { TPubchemInputFilter } from "../../data/utils/pubchem/input-filter";

const HelperText = styled(FormHelperText)(({theme})=>({
  paddingTop: 1,
  fontSize: 14,
  fontStyle: "italic",
  [theme.breakpoints.up("md")]:{
    fontSize: 16
  }
}))

const Label = styled(InputLabel)(({theme})=>({
  backgroundColor: theme.palette.background.default,
  padding: "0 8px",
}))


const InputName = ()=><FormControl>
  <Label htmlFor="name">Search by Name</Label>
  <OutlinedInput id="name" name="name" autoComplete="off" />
  <HelperText id="name">
    Compound Name to search in Pubchem database
  </HelperText>
</FormControl>

const InputSmiles = ()=><FormControl>
  <Label htmlFor="smiles">Search by Structure</Label>
  <OutlinedInput id="smiles" name="smiles" />
  <HelperText id="smiles">
    Compound Structure Identity known as SMILES, to search in Pubchem database
  </HelperText>
</FormControl>

interface IInputSearchProps {
	inputFilter: TPubchemInputFilter
}

const InputSearch:React.FC<IInputSearchProps> = ({inputFilter}) => {
  let content = <></>
  switch(inputFilter){
    default:
      content = <InputName />
      break
    case "smiles":
      content = <InputSmiles />
      break
  }
  return content
}
 
export default InputSearch;