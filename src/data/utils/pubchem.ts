export const PUBCHEM_BASE_API = "https://pubchem.ncbi.nlm.nih.gov/rest/pug"

export type TType = "compound" | "substance"
export type TInputSearch = "name" | "smiles"
export type TOutputType = "json" | "PNG"
export const inputSearchOptions: { val: TInputSearch; text: string }[] = [
	{ val: "name", text: "By Name" },
	{ val: "smiles", text: "By SMILES" },
]

export const pubchemGetURL = (
	dataType: TType = "compound",
	inputBy: TInputSearch,
	inputByVal: string
) => {
	/** @generator */
	/* 
		target return URL:
			https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/1000/json
			https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/abothyl/json
			https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCCCOCC/json
		abstract URL:
			PUBCHEM_BASE_API/dataType/inputBy/inputByVal/json
	*/

	let URL = ""
	URL += PUBCHEM_BASE_API
	URL += "/"
	URL += dataType
	URL += "/"
	URL += inputBy
	URL += "/"
	URL += inputByVal
	URL += "/json"
	return URL
}

/** @description */
/* Data Type from pubchem might be received by client app */
export interface TPubchemDataFullRecord {
	id: { id: { cid: number } };
	atoms?: {
		aid: number[];
		element: number[];
	};
	bonds?: {
		aid1: number[];
		aid2: number[];
		order: number[];
	};
	coords?: {
		type: number[];
		aid: number[];
		conformers: {
			x: number[];
			y: number[];
			style?: {
				annotation: number[];
				aid1: number[];
				aid2: number[];
			}
		}
	}[];
	props: {
		urn: {
			label: string;
			name?: string;
			[key: string]: any;
		}
		value: {
			ival?: number;
			fval?: number;
			[key: string]: any;
		}
	}[];
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
	[key:string]: any;
}

// export const pubchemJSONTransformer = (data:TPubchemDataFullRecord)=>{
	// const cid = data.id.id.cid
	// const atoms = data.atoms ? {
	// 	aid: data.atoms?.aid.join(", "),
	// 	element: data.atoms?.element.join(", ")
	// }: null
	// const bonds = {
	// 	aid1: data.bonds?.aid1.join(", "),
	// 	aid2: data.bonds?.aid2.join(", "),
	// 	order: data.bonds?.order.join(", "),
	// }
	// const coords = data.coords ? {
	// 	type: data.coords.at(0)!.type.join(", "),
	// 	aid: data.coords.at(0)!.aid.join(", "),
	// 	conformers: {
	// 		x: data.coords.at(0)!.conformers.x.join(", "),
	// 		y: data.coords.at(0)!.conformers.y.join(", "),
	// 		style: data.coords.at(0)!.conformers.y.join(", "),
	// 	}
	// }:null

// }