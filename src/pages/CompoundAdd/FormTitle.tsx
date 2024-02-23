import { Typography } from "@mui/material"
import { PropsWithChildren } from "react"

const FormTitle:React.FC<PropsWithChildren> = ({children}) => {
	return (
		<Typography variant="h4" component="h2" aria-roledescription="form-title">
			{children}
		</Typography>
	)
}

export default FormTitle
