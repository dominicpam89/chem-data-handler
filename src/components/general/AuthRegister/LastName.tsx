import { TextField } from "@mui/material";
import { Props } from "../AuthRegister";

const LastNameComp: React.FC<Props> = ({onBlurHandler}) => {
  return (
    <>
      <TextField
        fullWidth
        variant="standard"
        id="lastname"
        label="Last Name"
        name="lastname"
        type="text"
        onBlur={onBlurHandler}
      />
    </>
  );
};

export default LastNameComp;
