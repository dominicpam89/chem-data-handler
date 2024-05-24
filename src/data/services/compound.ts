/**   
	URL is API Gateway or middleware
	that created for specifically this chem-handler-app
*/
const URL = 'https://chem-handler-api-v2.vercel.app';
import { TypeCompound } from '../context/compound';
import { getError } from './errors';

export const getCompounds = async () => {
	const response = await fetch(URL + '/compounds', { mode: 'cors' });
	if (!response.ok) {
		const error = getError(response);
		throw error;
	}
	const data: TypeCompound[] = await response.json();
	return data;
};

export const getCompound = async (id: string) => {
	const response = await fetch(URL + '/compounds/' + id, { mode: 'cors' });
	if (!response.ok) {
		const error = getError(response);
		throw error;
	}
	const data = await response.json();
	return data;
};
