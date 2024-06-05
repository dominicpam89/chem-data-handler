import {
	Stack,
	Typography,
	Button,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";
import TableContainer from "../TableContainer";
import { useContext } from "react";
import { ContextCountTable } from "./ContextCountTableProvider";

const CountTableTitle: React.FC<{ title: string }> = ({ title }) => {
	const { toggleExpand, expand } = useContext(ContextCountTable);
	return (
		<Stack
			aria-label="title-wrap"
			direction="row"
			gap={2}
			justifyContent="center"
			alignItems="flex-end"
		>
			<Typography aria-label="title" variant="h4" component="h2">
				{title}
			</Typography>
			<Button
				aria-label="title-button"
				variant="text"
				color="info"
				size="small"
				onClick={toggleExpand}
			>
				{expand ? "Hide" : "Show More"}
			</Button>
		</Stack>
	);
};

const CountTable: React.FC<{ countObjects: [string, number][] }> = ({
	countObjects,
}) => {
	const { expand } = useContext(ContextCountTable);
	return (
		<TableContainer>
			<CountTableTitle title="Count Attributes" />
			{expand && (
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Label</TableCell>
							<TableCell>Values</TableCell>
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
			)}
		</TableContainer>
	);
};
export default CountTable;
