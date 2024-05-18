import { useQuery } from '@tanstack/react-query';
import { getCompounds } from '../services/compound';
import { TypeCompound } from '../context/compound';
import { ErrorFetch } from '../services/errors';

export const useGetCompounds = () => {
	const { data, error, isLoading, isError, isSuccess } = useQuery<
		TypeCompound[],
		ErrorFetch,
		TypeCompound[],
		string[]
	>({
		queryKey: ['compounds'],
		queryFn: getCompounds,
	});
	const compoundsState = { isLoading, isError, isSuccess };
	const compoundsData = { data, error };
	return { compoundsState, compoundsData };
};
