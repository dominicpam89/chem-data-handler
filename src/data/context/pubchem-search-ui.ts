import { useState } from "react";

export type TSearchBy = "name" | "smile";

type TContextPubchemSearchUI = {
	searchBy: TSearchBy;
	onSearchByChange: (searchBy: TSearchBy) => void;
};

export const ContextPubchemSearchUI: TContextPubchemSearchUI = {
	searchBy: "name",
	onSearchByChange: (searchBy) => {
		searchBy;
	},
};

export const useContextPubchemSearchUI = () => {
	const [searchBy, setSearchBy] = useState<TSearchBy>("name");
	const pubchemSearch: TContextPubchemSearchUI = {
		searchBy,
		onSearchByChange(searchBy) {
			setSearchBy(searchBy);
		},
	};
	return pubchemSearch;
};
