import { renderWithProviders } from "@/data/utils/testing.util";
import { it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobileNavbar from "./MobileNavbar";

const resizeWindow = (width: number) => {
	window.innerWidth = width;
	window.dispatchEvent(new Event("resize"));
};

describe("test button", () => {
	beforeEach(() => {
		renderWithProviders(<MobileNavbar />, "/compounds");
		resizeWindow(767);
	});
	it("toggle button is defined", async () => {
		const button = await screen.findByLabelText("sidebar-toggle");
		expect(button).toBeDefined();
	});
	it("if toggle button is clicked, navigation is showed", async () => {
		const button = await screen.findByLabelText("sidebar-toggle");
		const sidebarContainer = await screen.findByLabelText(
			"sidebar-container"
		);
		expect(sidebarContainer).not.toBeVisible();
		await userEvent.click(button);
		expect(sidebarContainer).toBeVisible();
	});
});
