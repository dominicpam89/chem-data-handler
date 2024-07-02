import { renderWithProviders } from "@/data/utils/testing.util";
import { it, expect } from "vitest";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageCompounds from "./Compounds";

const waitData = (time: number = 500) =>
	new Promise((resolve) => {
		setTimeout(() => resolve(time), time);
	});
beforeEach(() => {
	renderWithProviders(<PageCompounds />, "/compounds");
});

describe("component definition test", () => {
	it("loader is present in the beginning", async () => {
		await waitData(50);
		const loader = screen.getByLabelText("loader", { exact: true });
		expect(loader).toBeVisible();
	});
	it("search bar is present after data is loaded", async () => {
		await waitData(1000);
		const searchBar = await screen.findByLabelText("compounds-search-bar", {
			exact: true,
		});
		expect(searchBar).toBeInTheDocument();
	});
	it("pubchem access button is present after data is loaded", async () => {
		await waitData(1000);
		const button = await screen.findByRole("button", { name: /pubchem/i });
		expect(button).toBeInTheDocument();
	});
	it("compounds table is present after data is loaded", async () => {
		await waitData(1000);
		const table = await screen.findByLabelText("compounds-table", {
			exact: true,
		});
		expect(table).toBeInTheDocument();
	});
});

describe("functionality test", () => {
	it("display suggestions when user focus on search bar", async () => {
		await waitData(700);
		const inputSearchContainer = await screen.findByLabelText(
			"search-compound-input"
		);
		expect(inputSearchContainer).toBeInTheDocument();
		const inputSearch = await within(inputSearchContainer).findByRole(
			"combobox"
		);
		expect(inputSearch).toBeInTheDocument();
		expect(inputSearch.ariaExpanded).toEqual("false");
		await userEvent.click(inputSearch);
		expect(inputSearch.ariaExpanded).toEqual("true");
	});
});
