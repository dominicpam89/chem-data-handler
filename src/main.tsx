import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import ContextProvider from "@/data/context/main.tsx";
import ThemeProvider from "@/data/theme/ThemeProvider";
import { queryClient } from "@/data/utils/queryClient.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ContextProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
