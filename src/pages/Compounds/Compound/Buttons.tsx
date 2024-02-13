import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useContextMain } from "../../../data/hooks/useContext"

const Buttons = ()=>{
	const navigate = useNavigate()
	const {searchBar} = useContextMain().compound.predict
  return (
		<Box
			sx={{
				marginTop: 4,
				display: "flex",
				justifyContent: "flex-end",
				gap: 1,
			}}
		>
			<Button variant="outlined" color="error" onClick={()=>searchBar.setSelectedValue(null)}>
				Clear Search
			</Button>
			<Button variant="contained" color="secondary" onClick={()=>navigate(`${searchBar.selectedValue!.pk}/result`)}>
				Predict
			</Button>
		</Box>
  )
}

export default Buttons