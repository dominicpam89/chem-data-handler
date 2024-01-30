import { Control, useController, FieldName } from "react-hook-form"
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormHelperText,
} from "@mui/material"
import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"

interface Props {
	control: Control<any, any>
	name: FieldName<any>
	label: string
}

const InputPassword: React.FC<Props> = ({ control, name, label }) => {
	const [showPassword, setShowPassword] = useState(false)
	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
		rules: {
			required: "Password is required",
			pattern: {
				value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
				message:
					"Must contain minimum total 6 characters of minimum one uppercase, lowercase, and/or number",
			},
		},
		defaultValue: "",
	})

	return (
		<FormControl variant="outlined" error={invalid} fullWidth>
			<InputLabel htmlFor={label}>{label}</InputLabel>
			<OutlinedInput
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				inputRef={ref}
				id={label}
				type={showPassword ? "text" : "password"}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={() => setShowPassword(!showPassword)}
							onMouseDown={() => setShowPassword(!showPassword)}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label={label}
			/>
			{invalid && (
				<FormHelperText id="my-helper-text">
					{error!.message}
				</FormHelperText>
			)}
		</FormControl>
	)
}

export default InputPassword
