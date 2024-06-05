import { useLocation } from "react-router-dom";
import {
	TOperationType,
	TResponseData,
} from "../data/context/pubchem-search-ui";
import TableFullRecords from "./SearchResult/TableFullRecords";
import TableSynonyms from "./SearchResult/TableSynonyms";
import TableProperties from "./SearchResult/TableProperties";

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
	} else if (operationType === "synonyms") {
		const { pk, synonyms } = _data as TResponseData<"synonyms">;
		return (
			<TableSynonyms pk={pk} synonyms={synonyms} pictureUrl={pictureUrl} />
		);
	} else if (operationType === "property") {
		const data = _data as TResponseData<"property">;
		return <TableProperties data={data} pictureUrl={pictureUrl} />;
	} else {
		// supossed to return ErrorComponent
		return <></>;
	}
};

export default PageSearchResult;
