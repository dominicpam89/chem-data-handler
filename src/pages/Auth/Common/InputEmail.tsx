import { TextField } from "@mui/material"
import { Control, useController, FieldName } from "react-hook-form"

interface Props {
	control: Control<any, any>
	name: FieldName<any>
	label: string
}

const InputEmail: React.FC<Props> = ({ control, name, label }) => {
	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
		rules: {
			required: "Email is required",
			pattern: {
				value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
				message: "Invalid email address",
			},
		},
		defaultValue: "",
	})

	return (
		<TextField
			fullWidth
			name={name}
			label={label}
			variant="outlined"
			error={invalid}
			helperText={error?.message}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			inputRef={ref}
		/>
	)
}

export default InputEmail
