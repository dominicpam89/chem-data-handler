import { useLocation } from "react-router-dom";
import {
	TOperationType,
	TResponseData,
} from "../data/context/pubchem-search-ui";
import ResultFullRecords from "./SearchResult/FullRecords";

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
		return <ResultFullRecords data={data} pictureUrl={pictureUrl} />;
	}
	return <></>;
};

export default PageSearchResult;
