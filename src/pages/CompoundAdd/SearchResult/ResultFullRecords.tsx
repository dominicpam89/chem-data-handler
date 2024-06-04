import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";

interface Props {
	dataObjects: [string, string | number][];
	countObjects: [string, number][];
}

const ResultFullRecords: React.FC<Props> = ({ dataObjects, countObjects }) => {
	return (
		<>
			<TableContainer component={Paper} sx={{ padding: 3 }}>
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
								<TableCell component="th" style={{ width: 240 }}>
									{data[0]}
								</TableCell>
								<TableCell>{data[1]}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TableContainer component={Paper} sx={{ padding: 3 }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell colSpan={2}>Count Values</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{countObjects.map((count) => {
							return (
								<TableRow key={count[0]}>
									<TableCell>{count[0]}</TableCell>
									<TableCell>{count[1]}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default ResultFullRecords;
