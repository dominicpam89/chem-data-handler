// import { useState } from "react";

/**
 * This references can be taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
 */

export type TSearchBy = 'name' | 'smile';
export type TOperationType =
	| 'fullRecords'
	| 'property'
	| 'synonyms'
	| 'picture';

export type TPropertyNames =
	| 'MolecularFormula'
	| 'MolecularWeight'
	| 'CanonicalSMILES'
	| 'IsomericSMILES'
	| 'InChI'
	| 'InChIKey'
	| 'IUPACName'
	| 'Title'
	| 'XLogP'
	| 'ExactMass'
	| 'MonoisotopicMass'
	| 'TPSA'
	| 'Complexity'
	| 'Charge'
	| 'HBondDonorCount'
	| 'HBondAcceptorCount'
	| 'RotatableBondCount'
	| 'HeavyAtomCount'
	| 'IsotopeAtomCount'
	| 'AtomStereoCount'
	| 'DefinedAtomStereoCount'
	| 'UndefinedAtomStereoCount'
	| 'BondStereoCount'
	| 'DefinedBondStereoCount'
	| 'UndefinedBondStereoCount'
	| 'CovalentUnitCount'
	| 'PatentCount'
	| 'PatentFamilyCount'
	| 'LiteratureCount'
	| 'Volume3D'
	| 'XStericQuadrupole3D'
	| 'YStericQuadrupole3D'
	| 'ZStericQuadrupole3D'
	| 'FeatureCount3D'
	| 'FeatureAcceptorCount3D'
	| 'FeatureDonorCount3D'
	| 'FeatureAnionCount3D'
	| 'FeatureCationCount3D'
	| 'FeatureRingCount3D'
	| 'FeatureHydrophobeCount3D'
	| 'ConformerModelRMSD3D'
	| 'EffectiveRotorCount3D'
	| 'ConformerCount3D'
	| 'Fingerprint2D';

export type TFormSearch<S extends TSearchBy, O extends TOperationType> = {
	searchBy: S;
	searchByValue: string;
	operationType: O;
	propertyNameValues: TPropertyNames[] | null;
};

export type TFormSearchData = TFormSearch<TSearchBy, TOperationType>;

export const propertyOptions: { text: string; val: TPropertyNames }[] = [
	{ text: 'Molecular Formula', val: 'MolecularFormula' },
	{ text: 'Molecular Weight', val: 'MolecularWeight' },
	{ text: 'Canonical SMILES', val: 'CanonicalSMILES' },
	{ text: 'Isomeric SMILES', val: 'IsomericSMILES' },
	{ text: 'InChI', val: 'InChI' },
	{ text: 'InChI Key', val: 'InChIKey' },
	{ text: 'IUPAC Name', val: 'IUPACName' },
	{ text: 'Title', val: 'Title' },
	{ text: 'XLogP', val: 'XLogP' },
	{ text: 'Exact Mass', val: 'ExactMass' },
	{ text: 'Monoisotopic Mass', val: 'MonoisotopicMass' },
	{ text: 'TPSA', val: 'TPSA' },
	{ text: 'Complexity', val: 'Complexity' },
	{ text: 'Charge', val: 'Charge' },
	{ text: 'H-Bond Donor Count', val: 'HBondDonorCount' },
	{ text: 'H-Bond Acceptor Count', val: 'HBondAcceptorCount' },
	{ text: 'Rotatable Bond Count', val: 'RotatableBondCount' },
	{ text: 'Heavy Atom Count', val: 'HeavyAtomCount' },
	{ text: 'Isotope Atom Count', val: 'IsotopeAtomCount' },
	{ text: 'Atom Stereo Count', val: 'AtomStereoCount' },
	{ text: 'Defined Atom Stereo Count', val: 'DefinedAtomStereoCount' },
	{ text: 'Undefined Atom Stereo Count', val: 'UndefinedAtomStereoCount' },
	{ text: 'Bond Stereo Count', val: 'BondStereoCount' },
	{ text: 'Defined Bond Stereo Count', val: 'DefinedBondStereoCount' },
	{ text: 'Undefined Bond Stereo Count', val: 'UndefinedBondStereoCount' },
	{ text: 'Covalent Unit Count', val: 'CovalentUnitCount' },
	{ text: 'Patent Count', val: 'PatentCount' },
	{ text: 'Patent Family Count', val: 'PatentFamilyCount' },
	{ text: 'Literature Count', val: 'LiteratureCount' },
	{ text: 'Volume 3D', val: 'Volume3D' },
	{ text: 'X Steric Quadrupole 3D', val: 'XStericQuadrupole3D' },
	{ text: 'Y Steric Quadrupole 3D', val: 'YStericQuadrupole3D' },
	{ text: 'Z Steric Quadrupole 3D', val: 'ZStericQuadrupole3D' },
	{ text: 'Feature Count 3D', val: 'FeatureCount3D' },
	{ text: 'Feature Acceptor Count 3D', val: 'FeatureAcceptorCount3D' },
	{ text: 'Feature Donor Count 3D', val: 'FeatureDonorCount3D' },
	{ text: 'Feature Anion Count 3D', val: 'FeatureAnionCount3D' },
	{ text: 'Feature Cation Count 3D', val: 'FeatureCationCount3D' },
	{ text: 'Feature Ring Count 3D', val: 'FeatureRingCount3D' },
	{ text: 'Feature Hydrophobe Count 3D', val: 'FeatureHydrophobeCount3D' },
	{ text: 'Conformer Model RMSD 3D', val: 'ConformerModelRMSD3D' },
	{ text: 'Effective Rotor Count 3D', val: 'EffectiveRotorCount3D' },
	{ text: 'Conformer Count 3D', val: 'ConformerCount3D' },
	{ text: 'Fingerprint 2D', val: 'Fingerprint2D' },
];
