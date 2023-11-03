import { TextField } from "@mui/material";
import { Props } from "../AuthRegister";

const UsernameComp: React.FC<Props> = ({onBlurHandler}) => {
  return (
    <>
      <TextField
        fullWidth
        variant="standard"
        id="username"
        label="Username"
        name="username"
        type="text"
        onBlur={onBlurHandler}
      />
    </>
  );
};

export default UsernameComp;
