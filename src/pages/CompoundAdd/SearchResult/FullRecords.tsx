import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";
import { TResponseData } from "../../../data/context/pubchem-search-ui";
import ResultContainer from "./ResultContainer";
import ImageComponent from "./ImageComponent";

interface Props {
	data: TResponseData<"fullRecords">;
	pictureUrl: string;
}

const ResultFullRecords: React.FC<Props> = ({ data, pictureUrl }) => {
	const dataObjects = Object.entries(data).filter(
		([key]) => key !== "count"
	) as [string, string | number][];
	const countObjects = Object.entries(data.count);
	return (
		<ResultContainer>
			<ImageComponent pictureUrl={pictureUrl} alt={data.inchi} />
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
		</ResultContainer>
	);
};

export default ResultFullRecords;
