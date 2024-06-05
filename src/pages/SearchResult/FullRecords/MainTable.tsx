import {
	Typography,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";
import TableContainer from "../TableContainer";

const MainTable: React.FC<{ dataObjects: [string, string | number][] }> = ({
	dataObjects,
}) => {
	return (
		<TableContainer>
			<Typography
				aria-label="title"
				variant="h4"
				component="h2"
				textAlign="center"
			>
				Main Attributes
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Label</TableCell>
						<TableCell>Value</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dataObjects.map((data) => (
						<TableRow key={data[0]}>
							<TableCell style={{ width: 240 }}>{data[0]}</TableCell>
							<TableCell>{data[1]}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default MainTable;
