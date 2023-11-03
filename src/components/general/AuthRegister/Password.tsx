import { FormControl, InputLabel, Input, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface Props{
  showPass: boolean,
  setShowPass: React.Dispatch<React.SetStateAction<boolean>>,
  onBlurHandler: (e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>)=>void
}

const PasswordComp:React.FC<Props> = ({showPass, setShowPass, onBlurHandler}) => {
  return <>
    <FormControl variant='standard'>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input 
            id="password"
            type={showPass ? 'text':'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label='toggle password visibility' onClick={()=>setShowPass(ps=>!ps)}>
                  {showPass ? <VisibilityIcon />:<VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
            onBlur={onBlurHandler}
          />
        </FormControl>
  </>
}
 
export default PasswordComp;