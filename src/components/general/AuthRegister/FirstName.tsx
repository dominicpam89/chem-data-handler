import { TextField } from "@mui/material";
import { Props } from "../AuthRegister";

const FirstNameComp: React.FC<Props> = ({onBlurHandler}) => {
  return (
    <>
      <TextField
        fullWidth
        variant="standard"
        id="firstName"
        label="First Name"
        name="firstName"
        type="text"
        onBlur={onBlurHandler}
      />
    </>
  );
};

export default FirstNameComp;
