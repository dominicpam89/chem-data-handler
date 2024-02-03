import { AutocompleteRenderInputParams, TextField } from "@mui/material"
import { memo } from "react"

interface IRenderInput {
	params: AutocompleteRenderInputParams
}
const RenderInput: React.FC<IRenderInput> = ({ params }) => {
	return <TextField {...params} label="Search Compounds" />
}

export default memo(RenderInput)