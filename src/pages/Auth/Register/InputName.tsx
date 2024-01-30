import TextField from "@mui/material/TextField";
import { Control, FieldName, useController } from "react-hook-form";
import { TypeRegisterInputForm } from "../Register";

interface Props {
	control: Control<any, any>
	name: FieldName<TypeRegisterInputForm>
	label: string
}

const InputName:React.FC<Props> = ({control, name, label}) => {
  const {
    field:{onBlur,onChange,value,ref},
    fieldState:{invalid,error},
  } = useController({
    name,
    control,
    rules:{
      required: "Requires to be filled!",
      pattern:{
        value: /\w{3,}/gi,
        message: "Minimum 3 characters"
      }
    },
  })
  return <>
    <TextField 
        fullWidth
        label={label}
        name={name}
        variant="outlined"
        error={invalid}
        helperText={error?.message}
        value={value}
        inputRef={ref}
        onChange={onChange}
        onBlur={onBlur}
    />
  </>
}
 
export default InputName;