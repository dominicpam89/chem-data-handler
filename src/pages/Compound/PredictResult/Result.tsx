import { Button, Stack, Typography } from "@mui/material"
import { TypeCompound } from "../../../data/context/compound"
import { useNavigate } from "react-router-dom"

interface Props{
  item: TypeCompound
}
const Result:React.FC<Props> = ({item}) => {
	const navigate = useNavigate()
  return (
		<Stack direction="column" spacing={2} alignItems="center">
			<Typography variant="h3" component="h1">
				Prediction Result
			</Typography>
			<Typography variant="h5" component="h2">
				{item!.trivial_name}
			</Typography>
			<Typography variant="body1" component="h2">
				Temporary Page until API is ready
			</Typography>
      <Button variant="outlined" color="info" onClick={()=>{
				navigate("/compounds/"+item.pk)
			}}>Back</Button>
		</Stack>
	)
}

export default Result
