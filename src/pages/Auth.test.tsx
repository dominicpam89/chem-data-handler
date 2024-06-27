import { renderWithProviders } from "@/data/utils/testing.util";
import { screen } from "@testing-library/react";
import { it, expect } from "vitest";
import AuthPage from "./Auth";

it("main container in auth page is defined", () => {
	renderWithProviders(<AuthPage />);
	const mainLayout = screen.getByLabelText("main-layout-auth");
	expect(mainLayout).toBeInTheDocument();
});
