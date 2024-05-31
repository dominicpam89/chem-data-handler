// import { useState } from "react";

export type TSearchBy = "name" | "smile";
export type TOperationType =
	| "fullRecords"
	| "property"
	| "synonyms"
	| "picture";

export type TFormSearch<S extends TSearchBy, O extends TOperationType> = {
	searchBy: S;
	operationType: O;
	propertyName: O extends "property" ? string : never;
};
