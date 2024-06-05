import { TResponseData } from "../../data/context/pubchem-search-ui";
import ResultContainer from "./ResultContainer";
import ImageComponent from "./ImageComponent";
import MainTable from "./FullRecords/MainTable";
import { ContextCountTableProvider } from "./FullRecords/ContextCountTableProvider";
import CountTable from "./FullRecords/CountTable";

/** Main Component */
interface PropsMain {
	data: TResponseData<"fullRecords">;
	pictureUrl: string;
}

const ResultFullRecords: React.FC<PropsMain> = ({ data, pictureUrl }) => {
	const dataObjects = Object.entries(data).filter(
		([key]) => key !== "count"
	) as [string, string | number][];
	const countObjects = Object.entries(data.count);
	return (
		<ResultContainer>
			<ImageComponent pictureUrl={pictureUrl} alt={data.inchi} />
			<MainTable dataObjects={dataObjects} />
			<ContextCountTableProvider>
				<CountTable countObjects={countObjects} />
			</ContextCountTableProvider>
		</ResultContainer>
	);
};

export default ResultFullRecords;
