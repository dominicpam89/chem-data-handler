import { Stack } from "@mui/material"
import { TypeCompound } from "../data/context/compound"
import TestCompounds from "./Predict/Compounds.test"
import TestSearchBar from "./Predict/SearchBar.test"

const mockData: TypeCompound[] = [
	{
		pk: 1,
		trivial_name: "Trivial Additive Anusia",
		cas_number: "87-01-90",
		inci_name: "Inci Additive Anusia",
		smiles: "CCC3(C)C2CCC3C(C)CCCC(C)C)C(=C)CC1",
		comedogenicity_class: 2,
	},
	{
		pk: 2,
		trivial_name: "Trivial Additive Abecmdiul",
		cas_number: "45-67-89",
		inci_name: "Inci Additive Abecmdiul",
		smiles: "O=C(O)CCCCCCCCCCCCCCCCCCC",
		comedogenicity_class: 1,
	},
	{
		pk: 3,
		trivial_name: "Diisopropyl adipate",
		cas_number: "['121879-14-9', '6938-94-9']",
		inci_name: "Additive AnusiaDiisopropyl adipate",
		smiles: "O=C(OC(C)C)CCCCC(=O)OC(C)C",
		comedogenicity_class: 0,
	},
	{
		pk: 4,
		trivial_name: "Test 4 Trivial Name aoisud9qwheoiuh2",
		cas_number: "['121879-14-9', '6938-94-9']",
		inci_name: "Test 4 Inci Name asdoq0w98y12",
		smiles: "O=C(OC(C)C)CCCCC(=O)OC(C)CCCCOOOO",
		comedogenicity_class: 2,
	},
	{
		pk: 5,
		trivial_name: "Test 4 Trivial Name aoisud9qwheoiuh2",
		cas_number: "['121879-14-9', '6938-94-9']",
		inci_name: "Test 4 Inci Name asdoq0w98y12",
		smiles: "O=C(OC(C)C)CCCCC(=O)OC(C)CCCCOOOO",
		comedogenicity_class: 1,
	},
	{
		pk: 6,
		trivial_name: "Test 4 Trivial Name aoisud9qwheoiuh2",
		cas_number: "['121879-14-9', '6938-94-9']",
		inci_name: "Test 4 Inci Name asdoq0w98y12",
		smiles: "O=C(OC(C)C)CCCCC(=O)OC(C)CCCCOOOO",
		comedogenicity_class: 2,
	},
	{
		pk: 7,
		trivial_name: "Test 4 Trivial Name aoisud9qwheoiuh2",
		cas_number: "['121879-14-9', '6938-94-9']",
		inci_name: "Test 4 Inci Name asdoq0w98y12",
		smiles: "O=C(OC(C)C)CCCCC(=O)OC(C)CCCCOOOO",
		comedogenicity_class: 2,
	},
]

const PagePredictTest = () => {
	return (
		<Stack direction="column" spacing={3} sx={{width:"100%"}}>
			<TestSearchBar data={mockData} />
			<TestCompounds data={mockData} />
		</Stack>
	)
}

export default PagePredictTest
