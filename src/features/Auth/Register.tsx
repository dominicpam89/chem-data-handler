import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AuthRegister = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <form className="flex flex-col space-y-8">
        <TextField id="firstName" label="First Name" />
        <TextField id="lastName" label="Last Name" />
        <TextField id="username" label="Username" />
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((ps) => !ps)}
                  onMouseDown={() => setShowPassword((ps) => !ps)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
          />
        </FormControl>
        <div className="flex flex-col space-y-2">
          <button className="p-3 rounded-lg font-semibold bg-gradient-to-b from-primary-500 to-secondary-700 text-white">
            Submit
          </button>
          <button className="p-3 rounded-lg font-semibold border border-solid border-primary-500 text-primary-500">
            Reset
          </button>
        </div>
        <button onClick={(e)=>{e.preventDefault();navigate('/auth?mode=login')}} className="w-full p-3 rounded-lg font-semibold text-primary-500">Already has account</button>
      </form>
    </>
  );
};

export default AuthRegister;
