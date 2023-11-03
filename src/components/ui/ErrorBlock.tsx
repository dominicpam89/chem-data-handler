import { Alert } from '@mui/material';

interface Props{
  error: Error|null
}

const ErrorBlockComp:React.FC<Props> = ({error}) => {
  return <Alert severity="error">{error?.message}</Alert>
}
 
export default ErrorBlockComp;