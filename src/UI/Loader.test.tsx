import { renderWithProviders } from "@/data/utils/testing.util";
import UILoader from "./Loader";
import { screen } from "@testing-library/react";
import { it, expect, beforeEach } from "vitest";

beforeEach(() => {
	renderWithProviders(<UILoader />);
});

it("loader container is defined", () => {
	const loaderContainer = screen.getByLabelText("loader-container", {
		exact: true,
	});
	expect(loaderContainer).toBeInTheDocument();
});

it("loader component is defined", () => {
	const loaderContainer = screen.getByLabelText("loader", {
		exact: true,
	});
	expect(loaderContainer).toBeInTheDocument();
});
