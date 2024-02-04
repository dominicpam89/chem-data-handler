import { Alert, AlertTitle } from "@mui/material"
import { ErrorFetch } from "../data/services/errors"

interface Props {
	error: ErrorFetch | null
}
const UILoaderError: React.FC<Props> = ({ error }) => {
	return (
		<Alert severity="error">
			<AlertTitle>{error!.errorStatus}</AlertTitle>
			{error!.errorMessage}
		</Alert>
	)
}

export default UILoaderError
