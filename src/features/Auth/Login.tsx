import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <form className="flex flex-col space-y-8">
        <TextField fullWidth id="username" label="username" />
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
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <div className="w-full flex space-x-2">
          <button className="w-full p-3 rounded-lg font-semibold border border-solid border-primary-500 text-primary-500">
            Reset
          </button>
          <button className="w-full p-3 rounded-lg font-semibold bg-gradient-to-b from-primary-500 to-secondary-700 text-white">
            Submit
          </button>
        </div>
        <button onClick={(e)=>{e.preventDefault();navigate('/auth?mode=register')}} className="w-full p-3 rounded-lg font-semibold text-primary-500">Register new account</button>
      </form>
    </>
  );
};

export default AuthLogin;
