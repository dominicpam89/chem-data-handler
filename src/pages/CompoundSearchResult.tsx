import { useLocation } from "react-router-dom";
import {
	TOperationType,
	TResponseData,
} from "../data/context/pubchem-search-ui";
import TableFullRecords from "./SearchResult/TableFullRecords";
import TableSynonyms from "./SearchResult/TableSynonyms";

type TLocationState = {
	data: TResponseData<TOperationType>;
	operationType: TOperationType;
	pictureUrl: string;
};

const PageSearchResult = () => {
	const location = useLocation();
	const {
		data: _data,
		operationType,
		pictureUrl,
	}: TLocationState = location.state;
	let data;
	if (operationType === "fullRecords") {
		data = _data as TResponseData<"fullRecords">;
		return <TableFullRecords data={data} pictureUrl={pictureUrl} />;
	}
	if (operationType === "synonyms") {
		const { pk, synonyms } = _data as TResponseData<"synonyms">;
		return (
			<TableSynonyms pk={pk} synonyms={synonyms} pictureUrl={pictureUrl} />
		);
	}
	return <></>;
};

export default PageSearchResult;
