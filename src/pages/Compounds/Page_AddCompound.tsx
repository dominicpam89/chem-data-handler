import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCompound = () => {
  const navigate = useNavigate()
  return (
		<Stack
			direction="column"
			spacing={2}
			padding={4}
			justifyContent="center"
			alignItems="center"
		>
      <Typography variant="h3" component="h1">Wait for Pubchem API</Typography>
      <Button variant="contained" onClick={()=>navigate("/compounds")}>Back to Compounds</Button>
    </Stack>
  )
}
 
export default AddCompound;