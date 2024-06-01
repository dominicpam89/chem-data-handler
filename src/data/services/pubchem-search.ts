import { TFormSearchData } from '../context/pubchem-search-ui';
import { pubchemSearchUrl } from '../utils/pubchem-search.util';

type TDataFullRecords = {
	pk: number;
	smiles: string;
	inchi: string;
	inchiKey: string;
	IUPACNames: string;
	molecularFormula: string;
	count: {
		heavy_atom: number;
		atom_chiral: number;
		atom_chiral_def: number;
		atom_chiral_undef: number;
		bond_chiral: number;
		bond_chiral_def: number;
		bond_chiral_undef: number;
		isotope_atom: number;
		covalent_unit: number;
		tautomers: number;
	};
};

type TDataSynonyms = {
	pk: number;
	synonyms: Array<string>;
};

type TDataProperty = {
	pk: number;
	[key: string]: string | number;
};

/** 
	Body format for pubchem integration with middleware (or API Gateway)
	Can be found here:
	https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
*/
type TBodyFormatAPIGateway = {
	name: string;
	operationType: string;
	propertyName?: string;
};

const getPubchemCompoundData = async ({
	searchBy,
	searchByValue,
	operationType,
	propertyNameValues,
}: TFormSearchData) => {
	let url: string = pubchemSearchUrl;
	let _body: TBodyFormatAPIGateway;
	url += searchBy === 'name' ? 'name' : 'smiles';
	if (operationType === 'property')
		_body = {
			name: searchByValue,
			operationType,
			propertyName: propertyNameValues?.join(','),
		};
	else
		_body = {
			name: searchByValue,
			operationType,
		};
	const body = JSON.stringify(_body);
	console.log(url);
	console.log(body);
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body,
		mode: 'cors',
	});
	if (!response.ok) throw new Error("Couldn't fetch data");
	let data = await response.json();
	switch (operationType) {
		case 'fullRecords':
			data = data as TDataFullRecords;
			break;
		case 'synonyms':
			data = data as TDataSynonyms;
			break;
		case 'property':
			data = data as TDataProperty;
			break;
		default:
			break;
	}
	return data;
};

export default getPubchemCompoundData;
