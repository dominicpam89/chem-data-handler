import { PropsWithChildren, createContext, useState } from "react";

export const ContextCountTable = createContext({
	expand: false,
	toggleExpand() {},
});

export const ContextCountTableProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [countTableExpand, setCountTableExpand] = useState(false);
	const toggleExpand = () => setCountTableExpand(!countTableExpand);
	return (
		<ContextCountTable.Provider
			value={{ expand: countTableExpand, toggleExpand }}
		>
			{children}
		</ContextCountTable.Provider>
	);
};
