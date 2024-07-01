import { renderWithProviders } from "@/data/utils/testing.util";
import { it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobileNavbar from "./MobileNavbar";
import { initialState as navItems } from "@/data/context/navigation-items";

const resizeWindow = (width: number) => {
	window.innerWidth = width;
	window.dispatchEvent(new Event("resize"));
};

beforeEach(() => {
	renderWithProviders(<MobileNavbar />, "/compounds");
	resizeWindow(640);
});

describe("test button", () => {
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

describe("all the navigation items are in the navbar", () => {
	it("navigation contains all navigation items", async () => {
		const button = await screen.findByLabelText("sidebar-toggle");
		const sidebarContainer = await screen.findByLabelText(
			"sidebar-container"
		);
		expect(sidebarContainer).not.toBeVisible();
		await userEvent.click(button);
		expect(sidebarContainer).toBeVisible();
		navItems.forEach((item) => {
			const navItem = screen.getByText(item.text);
			expect(navItem).toBeInTheDocument();
		});
	});
});
