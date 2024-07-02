import { renderWithProviders } from "@/data/utils/testing.util";
import { it, expect } from "vitest";
import { screen } from "@testing-library/react";
import ListCompound from "./ListCompound";

const mockData = [
	{
		pk: 100,
		trivial_name: "trivial-100",
		cas_number: "cas-100",
		inci_name: "inci-100",
		smiles: "smiles-100",
		comedogenicity_class: 0,
		structure: "structure-100",
	},
	{
		pk: 200,
		trivial_name: "trivial-200",
		cas_number: "cas-200",
		inci_name: "inci-200",
		smiles: "smiles-200",
		comedogenicity_class: 0,
		structure: "structure-200",
	},
];

beforeEach(() => {
	renderWithProviders(<ListCompound data={mockData} />);
});

it("compound data is present", async () => {
	const data100 = await screen.findByText("inci-100", { exact: false });
	const data200 = await screen.findByText("inci-200", { exact: false });
	expect(data100).toBeVisible();
	expect(data200).toBeVisible();
});
