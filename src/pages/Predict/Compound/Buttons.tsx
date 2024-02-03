import { Box, Button } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"

const Buttons = ()=>{
	const {searchBar} = useContext(ContextMain).compound.predict
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
				Clear
			</Button>
			<Button variant="contained" color="secondary">
				Predict
			</Button>
		</Box>
  )
}

export default Buttons