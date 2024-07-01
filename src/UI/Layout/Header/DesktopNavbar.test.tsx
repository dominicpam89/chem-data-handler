import { renderWithProviders } from "@/data/utils/testing.util";
import { it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DesktopNavbar from "./DesktopNavbar";

const setWidth = (width: number) => {
	window.innerWidth = width;
	window.dispatchEvent(new Event("resize"));
};

beforeEach(() => {
	renderWithProviders(<DesktopNavbar />, "/home");
	setWidth(1024);
});

describe("Desktop Navbar basic testing", () => {
	it("sidebar is in the document", () => {
		const sidebarNav = screen.getByLabelText("desktop-navbar-container");
		expect(sidebarNav).toBeInTheDocument();
	});
	it("sidebar toggle is in the document", () => {
		const sidebarNavToggle = screen.getByLabelText("navbar-toggle");
		expect(sidebarNavToggle).toBeInTheDocument();
	});
});

describe("Component functional testing", () => {
	it("sidebar contains navigation icon and text initially", async () => {
		const sidebarNav = await screen.findByLabelText(
			"desktop-navbar-container"
		);
		expect(sidebarNav).toBeVisible();
		const listTextCompounds = within(sidebarNav).getByText(/compounds/i);
		const listTextHome = within(sidebarNav).getByText(/home/i);
		expect(listTextCompounds).toBeInTheDocument();
		expect(listTextHome).toBeInTheDocument();
	});
	it("sidebar width is smaller and text is not visible after user click toggle", async () => {
		const sidebarNav = screen.getByLabelText("desktop-navbar-container");
		expect(sidebarNav).toBeVisible();
		const sidebarNavToggle = screen.getByLabelText("navbar-toggle");
		expect(sidebarNavToggle).toBeVisible();
		await userEvent.click(sidebarNavToggle);
		const listTextCompounds = within(sidebarNav).getByText(/compounds/i);
		const listTextHome = within(sidebarNav).getByText(/home/i);
		expect(listTextCompounds).not.toBeVisible();
		expect(listTextHome).not.toBeVisible();
	});
});
