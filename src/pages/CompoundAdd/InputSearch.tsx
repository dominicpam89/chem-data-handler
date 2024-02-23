import { FormControl, FormHelperText, InputLabel, OutlinedInput, styled } from "@mui/material";
import { IInputSearchProps } from "../CompoundAdd";

const HelperText = styled(FormHelperText)(({})=>({
  paddingTop: 1,
  fontSize: 16,
  fontStyle: "italic",
}))

const Label = styled(InputLabel)(({theme})=>({
  backgroundColor: theme.palette.background.default,
  padding: "0 8px",
}))

const InputCID = () => (
	<FormControl>
		<Label htmlFor="cid">Search by ID</Label>
		<OutlinedInput id="cid" name="cid" />
		<HelperText id="cid">
			Search based on ID of compound in Pubchem Database (number)
		</HelperText>
	</FormControl>
)

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

const InputSearch:React.FC<IInputSearchProps> = ({inputFilter}) => {
  let content = <></>
  switch(inputFilter){
    default:
      content = <InputCID />
      break
    case "name":
      content = <InputName />
      break
    case "smiles":
      content = <InputSmiles />
      break
  }
  return content
}
 
export default InputSearch;