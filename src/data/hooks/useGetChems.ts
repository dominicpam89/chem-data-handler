import { useQuery } from '@tanstack/react-query';
import { getChems } from '../services/chems';

const useGetChems = ()=>{
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['chems'],
    queryFn: getChems,
  });
  return {data, isError, error, isLoading}
}

export default useGetChems;