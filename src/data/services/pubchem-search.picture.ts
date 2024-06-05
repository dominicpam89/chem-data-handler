import { TFormSearchData } from "../context/pubchem-search-ui";
import { pubchemSearchUrl } from "../utils/pubchem-search.util";

export const getPubchemPictureUrl = ({
	searchBy,
	searchByValue,
}: Partial<TFormSearchData>) => {
	let url: string = pubchemSearchUrl;
	url += searchBy + "/" + searchByValue! + "/image";
	return url;
};
