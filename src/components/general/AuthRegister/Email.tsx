import { TextField } from "@mui/material";
import { Props } from "../AuthRegister";

const EmailComp: React.FC<Props> = ({onBlurHandler}) => {
  return (
    <>
      <TextField
        fullWidth
        variant="standard"
        id="email"
        label="Email"
        name="email"
        type="text"
        onBlur={onBlurHandler}
      />
    </>
  );
};

export default EmailComp;
