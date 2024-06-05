import { TableContainer as TBContainer, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

const TableContainer: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<TBContainer
			component={Paper}
			sx={{
				padding: 4,
				display: "flex",
				flexDirection: "column",
				gap: 6,
			}}
		>
			{children}
		</TBContainer>
	);
};

export default TableContainer;
