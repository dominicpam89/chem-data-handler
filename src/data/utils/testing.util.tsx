import { render, RenderOptions } from "@testing-library/react";
import ContextProvider from "@/data/context/main";
import { BrowserRouter as Router } from "react-router-dom";
import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export const renderWithProviders = (
	ui: React.ReactNode,
	options?: RenderOptions
) => {
	render(
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<Router>{ui}</Router>
			</ContextProvider>
		</QueryClientProvider>,
		{ ...options }
	);
};
