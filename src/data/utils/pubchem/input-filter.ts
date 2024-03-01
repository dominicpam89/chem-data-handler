/** @type Input Filter */
export type TType = "compound" | "substance"
export type TPubchemInputFilter = "name" | "smiles"
export const inputSearchOptions: { val: TPubchemInputFilter; text: string }[] = [
	{ val: "name", text: "By Name" },
	{ val: "smiles", text: "By SMILES" },
]