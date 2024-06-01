import { TOperationType } from "../../context/pubchem-search-ui";
import { pubchemSearchUrl as url } from "../../utils/pubchem-search.util";

const operationType: TOperationType = "fullRecords";

type TGetByNameParams = {
	searchByValue: string;
};
type TGetByName = (params: TGetByNameParams) => any;

const getByNameFullRecords: TGetByName = async ({ searchByValue }) => {
	const _body = {
		name: searchByValue,
		operationType,
	};
	const request = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(_body),
	});
	return request;
};

export default getByNameFullRecords;
