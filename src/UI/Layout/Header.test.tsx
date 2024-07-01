import { renderWithProviders } from "@/data/utils/testing.util";
import { it, beforeEach, describe, expect } from "vitest";
import { screen } from "@testing-library/react";
import UILayoutHeader from "./Header";

const resizeWindow = async (width: number) => {
	window.innerWidth = width;
	window.dispatchEvent(new Event("resize"));
};

describe("Layout header display based on screen size", () => {
	beforeEach(() => {
		renderWithProviders(<UILayoutHeader />, "/compounds");
	});

	it("mobile navbar is present, when screen is less or equal than 768px", async () => {
		await resizeWindow(500);
		const mobileNavbar = await screen.findByLabelText("mobile-nav");
		expect(mobileNavbar).toBeVisible();
	});

	it("desktop navbar is present, when screen is bigger than 768px", async () => {
		await resizeWindow(1280);
		const desktopNavbar = await screen.findByLabelText(
			"desktop-navbar-container"
		);
		expect(desktopNavbar).toBeVisible();
	});
});
