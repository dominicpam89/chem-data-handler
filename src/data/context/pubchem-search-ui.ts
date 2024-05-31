// import { useState } from "react";

/**
 * This references can be taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-localhost
 * or
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-vercel
 */

export type TSearchBy = "name" | "smile";
export type TOperationType =
	| "fullRecords"
	| "property"
	| "synonyms"
	| "picture";

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

export type TFormSearch<S extends TSearchBy, O extends TOperationType> = {
	searchBy: S;
	searchByValue: string;
	operationType: O;
	propertyNameValues?: O extends "property" ? TPropertyNames[] | [] : never;
};
