import { useQuery } from "@tanstack/react-query";
import { getCompound } from "../services/compound";
import { ErrorFetch } from "../services/errors";
import { TypeCompound } from "../context/compound";
import { useParams } from "react-router-dom";

/* 
  This hook is used on Compound.tsx
  rendering one compound based on
  API+"compounds/:pk"
*/
export const useGetCompound = () => {
	const { pk } = useParams();
	const id = pk as string;
	const { data, error, isLoading, isError, isSuccess } = useQuery<
		TypeCompound,
		ErrorFetch,
		TypeCompound,
		string[]
	>({
		queryKey: ["compounds", id],
		queryFn: () => getCompound(id),
	});
	const compoundState = { isLoading, isError, isSuccess };
	const compoundData = { data, error };
	return { compoundState, compoundData };
};
