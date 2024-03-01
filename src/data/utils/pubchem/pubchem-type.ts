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