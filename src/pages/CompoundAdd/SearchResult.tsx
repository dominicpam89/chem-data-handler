import { Stack, Typography } from "@mui/material";
import {
	TOperationType,
	TResponseData,
} from "../../data/context/pubchem-search-ui";
import ResultFullRecords from "./SearchResult/ResultFullRecords";

// Data types taken from parent's component
interface Props {
	data: {
		data: TResponseData<TOperationType> | undefined;
		error: Error | null;
	};
	dataState: {
		isError: boolean;
		isPending: boolean;
	};
	pictureUrl: string;
	operationType: TOperationType;
}

const SearchResult: React.FC<Props> = ({ data, operationType }) => {
	if (operationType === "fullRecords") {
		const _data = data.data as TResponseData<"fullRecords">;
		const dataObjects = Object.entries(_data).filter(
			([key]) => key !== "count"
		) as [string, string | number][];
		const countObjects = Object.entries(_data.count);
		return (
			<>
				<Stack direction="column" gap={2}>
					<Typography variant="h4" component="h1">
						Search Result
					</Typography>
					<ResultFullRecords
						dataObjects={dataObjects}
						countObjects={countObjects}
					/>
				</Stack>
			</>
		);
	}
};

export default SearchResult;
