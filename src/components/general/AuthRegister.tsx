import { useState } from "react";
import { TextField, Typography, ButtonGroup, Button, FormControl, InputLabel, Input, InputAdornment, IconButton, } from '@mui/material';
import { UserRegistration } from "../../data/classes/User";
import { useNavigate } from 'react-router-dom';

import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const initialState = new UserRegistration('','','','','');

const AuthRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserRegistration>(initialState);
  const [showPass, setShowPass] = useState<boolean>(false);
  const inputChangeHandler = (
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name:string
  )=>{
    setFormData(ps=>({...ps,[name]:e.target.value}));
  }
  return <>
      <form className="w-slim flex flex-col space-y-8 p-14 shadow-xl">
        <div aria-label='form-header' className="p-5 flex justify-center items-center space-x-3">
          <DonutSmallIcon fontSize="large" color="primary" />
          <Typography variant="h6">Logo | Project Icon</Typography>
        </div>
        <div aria-label='divider-2' className="flex space-x-6">
          <TextField
            fullWidth
            variant="standard"
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={e=>inputChangeHandler(e,'firstName')}
          />
          <TextField
            fullWidth
            variant="standard"
            id="lastName"
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={e=>inputChangeHandler(e,'lastName')}
          />
        </div>
        <TextField
          fullWidth
          variant="standard"
          id="email"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={e=>inputChangeHandler(e,'email')}
        />
        <TextField
          fullWidth
          variant="standard"
          id="username"
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={e=>inputChangeHandler(e,'username')}
        />
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
            value={formData.password}
            onChange={e=>inputChangeHandler(e,'password')}
          />
        </FormControl>
        <div className="flex flex-col space-y-6 pt-8">
          <ButtonGroup size="small" fullWidth>
            <Button variant="outlined" color="primary">Reset</Button>
            <Button variant="contained" color="primary">Register</Button>
          </ButtonGroup>
          <Button fullWidth variant='text' color='info' size="small" onClick={()=>navigate('/auth?mode=login')}>Already has account?</Button>
        </div>
      </form>
  </>
};

export default AuthRegister;
