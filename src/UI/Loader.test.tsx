import { renderWithProviders } from "@/data/utils/testing.util";
import UILoader from "./Loader";
import { screen } from "@testing-library/react";
import { it, expect } from "vitest";

it("loader container is defined", () => {
	renderWithProviders(<UILoader />);
	const loaderContainer = screen.getByLabelText("loader-container", {
		exact: true,
	});
	expect(loaderContainer).toBeDefined();
});

it("loader component is defined", () => {
	renderWithProviders(<UILoader />);
	const loader = screen.getByLabelText("loader", { exact: true });
	expect(loader).toBeDefined();
});
