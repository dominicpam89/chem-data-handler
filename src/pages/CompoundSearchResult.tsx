import { useLocation, useNavigate } from "react-router-dom";
import {
	TFormSearchData,
	TOperationType,
	TResponseData,
} from "../data/context/pubchem-search-ui";
import TableFullRecords from "./SearchResult/TableFullRecords";
import TableSynonyms from "./SearchResult/TableSynonyms";
import TableProperties from "./SearchResult/TableProperties";
import { Stack, Typography, Button } from "@mui/material";

interface PropSearchResult {
	data: TResponseData<TOperationType>;
	operationType: TOperationType;
	pictureUrl: string;
}

interface TLocationState extends PropSearchResult {
	formData: TFormSearchData;
}

const SearchResult: React.FC<PropSearchResult> = ({
	data,
	operationType,
	pictureUrl,
}) => {
	if (operationType === "fullRecords") {
		return (
			<TableFullRecords
				data={data as TResponseData<"fullRecords">}
				pictureUrl={pictureUrl}
			/>
		);
	} else if (operationType === "synonyms") {
		const { pk, synonyms } = data as TResponseData<"synonyms">;
		return (
			<TableSynonyms pk={pk} synonyms={synonyms} pictureUrl={pictureUrl} />
		);
	} else if (operationType === "property") {
		return (
			<TableProperties
				data={data as TResponseData<"property">}
				pictureUrl={pictureUrl}
			/>
		);
	} else {
		// supossed to return ErrorComponent
		return <></>;
	}
};

const PageSearchResult = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { data, operationType, pictureUrl, formData }: TLocationState =
		location.state;
	const onBackToSearchForm = () => {
		navigate("/compounds/add", {
			state: {
				formData,
			},
		});
	};
	return (
		<Stack direction="column" gap={6} justifyContent="center" width="100%">
			<Stack direction="column" gap={1}>
				<Typography variant="h2" component="h1" textAlign="center">
					Search Result
				</Typography>
				<Typography
					variant="subtitle2"
					fontSize={16}
					component="h2"
					textAlign="center"
				>
					From Pubchem Database Query
				</Typography>
				<Button
					variant="text"
					color="secondary"
					onClick={onBackToSearchForm}
				>
					Back to Search Form
				</Button>
			</Stack>
			<SearchResult
				data={data}
				operationType={operationType}
				pictureUrl={pictureUrl}
			/>
		</Stack>
	);
};

export default PageSearchResult;
