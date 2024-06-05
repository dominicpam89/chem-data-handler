import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import ImageComponent from "./ImageComponent";
import ResultContainer from "./ResultContainer";
import TableContainer from "./TableContainer";

interface Props {
	pk: number;
	synonyms: string[];
	pictureUrl: string;
}

const TableSynonyms: React.FC<Props> = ({ pk, synonyms, pictureUrl }) => {
	return (
		<ResultContainer>
			<ImageComponent pictureUrl={pictureUrl} alt={synonyms[0]} />
			<TableContainer>
				<Typography
					aria-label="title"
					variant="h4"
					component="h2"
					textAlign="center"
				>
					Synonyms
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Label</TableCell>
							<TableCell>Value</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>{pk}</TableCell>
						</TableRow>
						{synonyms.map((synonym, index) => {
							return (
								<TableRow key={synonym}>
									<TableCell>
										{index === 0 ? "Synonyms" : ""}
									</TableCell>
									<TableCell>{synonym}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</ResultContainer>
	);
};

export default TableSynonyms;
