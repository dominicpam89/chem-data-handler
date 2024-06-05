import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import TableContainer from "./TableContainer";
import { TResponseData } from "../../data/context/pubchem-search-ui";
import { useEffect, useMemo } from "react";
import ImageComponent from "./ImageComponent";

interface Props {
	data: TResponseData<"property">;
	pictureUrl: string;
}

const TableProperties: React.FC<Props> = ({ data, pictureUrl }) => {
	const arrayData = useMemo(() => Object.entries(data), [data]);
	let tableTitle: string = "Record based on Properties";
	useEffect(() => {
		if (arrayData.length > 2) tableTitle = "Record based on Properties";
		else tableTitle = "Record based on one Property";
	}, [arrayData]);
	return (
		<>
			<ImageComponent
				pictureUrl={pictureUrl}
				alt={arrayData[1][1].toString()}
			/>
			<TableContainer>
				<Typography
					aria-label="title"
					variant="h4"
					component="h2"
					textAlign="center"
				>
					{tableTitle}
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Label</TableCell>
							<TableCell>Value</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{arrayData.map((data) => {
							return (
								<TableRow key={data[0]}>
									<TableCell style={{ width: 240 }}>
										{data[0]}
									</TableCell>
									<TableCell
										style={{
											maxWidth: 480,
											wordWrap: "break-word",
											whiteSpace: "normal",
										}}
									>
										{data[1]}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TableProperties;
