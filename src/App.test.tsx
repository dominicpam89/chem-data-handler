// import { renderWithProviders } from "./data/utils/testing.util";
import { it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./data/utils/testing.util";
import RootLayout from "./UI/Layout";

const simulateScroll = (y: number) => {
	window.scrollY = y;
	window.dispatchEvent(new Event("scroll"));
};

it("testing scroll to top button", async () => {
	simulateScroll(0);
	renderWithProviders(<RootLayout />, "/compounds");
	simulateScroll(window.innerHeight * 2);
	const scrollToTopEl = await screen.findByLabelText("fab");
	expect(scrollToTopEl).toBeVisible();
});
