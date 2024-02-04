import { useParams } from "react-router-dom"
import { useGetCompounds } from "../../data/hooks/useGetCompounds"
import { useMemo } from "react"
import UILoader from "../../UI/Loader"
import UILoaderError from "../../UI/LoaderError"
import Result from "./$PredictResult/Result"

const PagePredictResult = () => {
	const { pk } = useParams()
	const { compoundsData, compoundsState } = useGetCompounds()
	const item = useMemo(() => {
		if (compoundsData.data) {
			return compoundsData.data.find((item) => item.pk === Number(pk))
		} else {
			return null
		}
	}, [compoundsData.data, pk])
	return (
		<>
			{compoundsState.isLoading && <UILoader />}
			{compoundsState.isError && (
				<UILoaderError error={compoundsData.error} />
			)}
			{compoundsState.isSuccess && item && <Result item={item} />}
		</>
	)
}

export default PagePredictResult
