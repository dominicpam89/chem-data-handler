import { render, RenderOptions } from "@testing-library/react";
import ContextProvider from "@/data/context/main";
import { BrowserRouter as Router } from "react-router-dom";

export const renderWithProviders = (
	ui: React.ReactNode,
	options?: RenderOptions
) => {
	render(
		<ContextProvider>
			<Router>{ui}</Router>
		</ContextProvider>,
		{ ...options }
	);
};
