import UILoader from "../../UI/Loader"
import UILoaderError from "../../UI/LoaderError"
import Result from "./PredictResult/Result"
import { useGetCompound } from "../../data/hooks/useGetCompound"

const PagePredictResult = () => {
	const { compoundData, compoundState } = useGetCompound()
	const { data, error } = compoundData
	return (
		<>
			{compoundState.isLoading && <UILoader />}
			{compoundState.isError && (
				<UILoaderError error={error} />
			)}
			{compoundState.isSuccess && data && <Result item={data} />}
		</>
	)
}

export default PagePredictResult
