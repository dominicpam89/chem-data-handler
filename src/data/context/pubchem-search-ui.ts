/**
 * This references can be taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
 */

/**
 * The type of search to be performed, either by name or SMILES.
 * @type {"name" | "smiles"} TSearchBy
 */
export type TSearchBy = "name" | "smiles";

/**
 * The type of operation to be performed in the search, such as retrieving full records, properties, or synonyms.
 * @type {"fullRecords" | "property" | "synonyms"} TOperationType
 */
export type TOperationType = "fullRecords" | "property" | "synonyms";

/**
 * The various property names that can be requested in the search operation.
 * @see Pubchem REST Documentation: https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest
 */
export type TPropertyNames =
	| "MolecularFormula"
	| "MolecularWeight"
	| "CanonicalSMILES"
	| "IsomericSMILES"
	| "InChI"
	| "InChIKey"
	| "IUPACName"
	| "Title"
	| "XLogP"
	| "ExactMass"
	| "MonoisotopicMass"
	| "TPSA"
	| "Complexity"
	| "Charge"
	| "HBondDonorCount"
	| "HBondAcceptorCount"
	| "RotatableBondCount"
	| "HeavyAtomCount"
	| "IsotopeAtomCount"
	| "AtomStereoCount"
	| "DefinedAtomStereoCount"
	| "UndefinedAtomStereoCount"
	| "BondStereoCount"
	| "DefinedBondStereoCount"
	| "UndefinedBondStereoCount"
	| "CovalentUnitCount"
	| "PatentCount"
	| "PatentFamilyCount"
	| "LiteratureCount"
	| "Volume3D"
	| "XStericQuadrupole3D"
	| "YStericQuadrupole3D"
	| "ZStericQuadrupole3D"
	| "FeatureCount3D"
	| "FeatureAcceptorCount3D"
	| "FeatureDonorCount3D"
	| "FeatureAnionCount3D"
	| "FeatureCationCount3D"
	| "FeatureRingCount3D"
	| "FeatureHydrophobeCount3D"
	| "ConformerModelRMSD3D"
	| "EffectiveRotorCount3D"
	| "ConformerCount3D"
	| "Fingerprint2D";

/**
 * This is typescript advance type definition to be used in Compound Add form
 * @page src/pages/CompoundAdd.tsx
 * @type {Object} TFormSearch<S extends TSearchBy, O extends TOperationType>
 * @property {S} searchBy - The type of search to be performed.
 * @property {string} searchByValue - The value to be searched for.
 * @property {O} operationType - The type of operation to be performed.
 * @property {TPropertyNames[] | null} propertyNameValues - An array of property names to be retrieved, or null.
 *
 * The structure of the form data for searching compounds.
 */
export type TFormSearch<S extends TSearchBy, O extends TOperationType> = {
	searchBy: S;
	searchByValue: string;
	operationType: O;
	propertyNameValues: TPropertyNames[] | null;
};

/**
 * This is typescript advance type definition to be used in Compound Add form
 * @page src/pages/CompoundAdd.tsx
 * @type {Object} TFormSearch<TSearchBy, TOperationType>
 * @property {S} searchBy - The type of search to be performed.
 * @property {string} searchByValue - The value to be searched for.
 * @property {O} operationType - The type of operation to be performed.
 * @property {TPropertyNames[] | null} propertyNameValues - An array of property names to be retrieved, or null.
 *
 * The structure of the form data for searching compounds.
 */
export type TFormSearchData = TFormSearch<TSearchBy, TOperationType>;

/**
 * The request data structure when searching by name.
 * @type {Object} TRequestDataByName<T extends TOperationType>
 * @property {string} name - The name of the compound to search for.
 * @property {T} operationType - The type of operation to be performed.
 * @property {string | undefined} propertyName - The name of the property to be retrieved, if applicable.
 *
 */
type TRequestDataByName<T extends TOperationType> = {
	name: string;
	operationType: T;
	propertyName: string | undefined;
};

/**
 * The request data structure when searching by SMILES.
 * @type {Object} TRequestDataBySmiles<T extends TOperationType>
 * @property {string} smiles - The SMILES representation of the compound to search for.
 * @property {T} operationType - The type of operation to be performed.
 * @property {string | undefined} propertyName - The name of the property to be retrieved, if applicable.
 *
 */
type TRequestDataBySmiles<T extends TOperationType> = {
	smiles: string;
	operationType: T;
	propertyName: string | undefined;
};

/**
 * @definition
 * The request data type structure for searching compounds
 * based on TSearchBy
 * If TSearchBy is name, TRequestDataByName<Y extends TOperationType> is returned
 * If TSearchBy is smiles, TRequestDataBySmiles<Y extends TOperationType> is returned
 * @example
 * const getRequestData = ({searchBy, operationType})=>{
 * 		let requestData:TRequestData<typeof searchBy, typeof operationType>;
 * 		if(searchBy==="name") requestData = getDataByName(operationType)
 * 		else requestData = getDataBySmiles(operationType)
 * 		return requestData;
 * }
 */
export type TRequestData<
	T extends TSearchBy,
	Y extends TOperationType
> = T extends "name" ? TRequestDataByName<Y> : TRequestDataBySmiles<Y>;

/**
 * This type definition is taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
 */

type TResponseDataFullRecords = {
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

/**
 * This type definition is taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
 */
type TResponseDataSynonyms = {
	pk: number;
	synonyms: Array<string>;
};

/**
 * This type definition is taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
 */
type TResponseDataProperty = {
	pk: number;
	[key: string]: string | number;
};

/**
 * @definition
 * This type definition is to define responseData
 * based on middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
 * @example
 * // form submission
 * const { mutate, data, error, isError, isPending } = useMutation({
		mutationFn: (data: TFormSearchData) => getPubchemCompoundData(data),
		onSuccess: (data, formData) => {
			navigate("/compounds/search-result", {
				state: {
					data,
					operationType,
					pictureUrl: getPubchemPictureUrl(formData),
					formData,
				},
			});
		},
	});
	// SearchResult component
 * const { data, operationType, pictureUrl, formData }: TLocationState =
		location.state;
 * const getResponseData = ({data, operationType})=>{
		if (operationType === "fullRecords") {
			return (
				<TableFullRecords
					data={data as TResponseData<"fullRecords">}
					pictureUrl={pictureUrl}
				/>
			);
		} else if (operationType === "synonyms") {
			const { pk, synonyms } = data as TResponseData<"synonyms">;
			return (
				<TableSynonyms pk={pk} synonyms={synonyms} pictureUrl={pictureUrl} />
			);
 * 		}
 */
export type TResponseData<T extends TOperationType> = T extends "fullRecords"
	? TResponseDataFullRecords
	: T extends "synonyms"
	? TResponseDataSynonyms
	: T extends "property"
	? TResponseDataProperty
	: any;
/**
 * @definition
 * It is used as AutoComplete in AutoComplete MUI component list-items.
 * @component src/pages/CompoundAdd/PropertySelect.tsx
 */
export const propertyOptions: { text: string; val: TPropertyNames }[] = [
	{ text: "Molecular Formula", val: "MolecularFormula" },
	{ text: "Molecular Weight", val: "MolecularWeight" },
	{ text: "Canonical SMILES", val: "CanonicalSMILES" },
	{ text: "Isomeric SMILES", val: "IsomericSMILES" },
	{ text: "InChI", val: "InChI" },
	{ text: "InChI Key", val: "InChIKey" },
	{ text: "IUPAC Name", val: "IUPACName" },
	{ text: "Title", val: "Title" },
	{ text: "XLogP", val: "XLogP" },
	{ text: "Exact Mass", val: "ExactMass" },
	{ text: "Monoisotopic Mass", val: "MonoisotopicMass" },
	{ text: "TPSA", val: "TPSA" },
	{ text: "Complexity", val: "Complexity" },
	{ text: "Charge", val: "Charge" },
	{ text: "H-Bond Donor Count", val: "HBondDonorCount" },
	{ text: "H-Bond Acceptor Count", val: "HBondAcceptorCount" },
	{ text: "Rotatable Bond Count", val: "RotatableBondCount" },
	{ text: "Heavy Atom Count", val: "HeavyAtomCount" },
	{ text: "Isotope Atom Count", val: "IsotopeAtomCount" },
	{ text: "Atom Stereo Count", val: "AtomStereoCount" },
	{ text: "Defined Atom Stereo Count", val: "DefinedAtomStereoCount" },
	{ text: "Undefined Atom Stereo Count", val: "UndefinedAtomStereoCount" },
	{ text: "Bond Stereo Count", val: "BondStereoCount" },
	{ text: "Defined Bond Stereo Count", val: "DefinedBondStereoCount" },
	{ text: "Undefined Bond Stereo Count", val: "UndefinedBondStereoCount" },
	{ text: "Covalent Unit Count", val: "CovalentUnitCount" },
	{ text: "Patent Count", val: "PatentCount" },
	{ text: "Patent Family Count", val: "PatentFamilyCount" },
	{ text: "Literature Count", val: "LiteratureCount" },
	{ text: "Volume 3D", val: "Volume3D" },
	{ text: "X Steric Quadrupole 3D", val: "XStericQuadrupole3D" },
	{ text: "Y Steric Quadrupole 3D", val: "YStericQuadrupole3D" },
	{ text: "Z Steric Quadrupole 3D", val: "ZStericQuadrupole3D" },
	{ text: "Feature Count 3D", val: "FeatureCount3D" },
	{ text: "Feature Acceptor Count 3D", val: "FeatureAcceptorCount3D" },
	{ text: "Feature Donor Count 3D", val: "FeatureDonorCount3D" },
	{ text: "Feature Anion Count 3D", val: "FeatureAnionCount3D" },
	{ text: "Feature Cation Count 3D", val: "FeatureCationCount3D" },
	{ text: "Feature Ring Count 3D", val: "FeatureRingCount3D" },
	{ text: "Feature Hydrophobe Count 3D", val: "FeatureHydrophobeCount3D" },
	{ text: "Conformer Model RMSD 3D", val: "ConformerModelRMSD3D" },
	{ text: "Effective Rotor Count 3D", val: "EffectiveRotorCount3D" },
	{ text: "Conformer Count 3D", val: "ConformerCount3D" },
	{ text: "Fingerprint 2D", val: "Fingerprint2D" },
];
