import {
	TOperationType,
	TResponseData,
} from "../../data/context/pubchem-search-ui";

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
}

const SearchResult: React.FC<Props> = ({ data, dataState, pictureUrl }) => {
	return (
		<>
			{data.data && <p>Data Exist</p>}
			{dataState.isError && <p>Error in fetching data</p>}
			{pictureUrl && <img src={pictureUrl} alt="picture" />}
		</>
	);
};

export default SearchResult;
