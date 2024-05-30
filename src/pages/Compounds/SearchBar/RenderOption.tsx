import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { memo } from "react";

export const BoxContainer: React.FC<{
	children: React.ReactNode;
	props: React.HTMLAttributes<HTMLLIElement>;
}> = memo(({ children, props }) => {
	return (
		<Box component="li" {...props}>
			<Box
				component="div"
				sx={{
					padding: 1,
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					gap: 2,
				}}
			>
				{children}
			</Box>
		</Box>
	);
});

export const TrivialName: React.FC<{ children: React.ReactNode }> = memo(
	({ children }) => {
		return (
			<Typography variant="body1" component="h3">
				{children}
			</Typography>
		);
	}
);

export const CasNumber: React.FC<{ children: React.ReactNode }> = memo(
	({ children }) => {
		return (
			<Typography
				variant="body2"
				component="h5"
				fontSize={12}
				sx={{ opacity: 0.6 }}
			>
				{children}
			</Typography>
		);
	}
);
