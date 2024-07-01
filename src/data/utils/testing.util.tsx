import { render, RenderOptions } from "@testing-library/react";
import ContextProvider from "@/data/context/main";
import { MemoryRouter } from "react-router-dom";
import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export const renderWithProviders = (
	ui: React.ReactNode,
	route: string = "/",
	options?: RenderOptions
) => {
	window.history.pushState({}, "", route);
	render(
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
			</ContextProvider>
		</QueryClientProvider>,
		{ ...options }
	);
};
