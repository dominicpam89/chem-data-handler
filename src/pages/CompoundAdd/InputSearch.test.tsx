import { render, screen } from "@testing-library/react"
import InputSearch from "./InputSearch"
import { TPubchemInputFilter } from "../../data/utils/pubchem/input-filter"

const inputFilterMockName:TPubchemInputFilter = "name"
const inputFilterMockSmiles:TPubchemInputFilter = "smiles"

test("inputSearch as name", ()=>{
  render(<InputSearch inputFilter={inputFilterMockName} />)
  const textFieldElement = screen.getByLabelText("name", {exact:false})
  expect(textFieldElement).toBeInTheDocument()
})

test("inputSearch as smiles", ()=>{
  render(<InputSearch inputFilter={inputFilterMockSmiles} />)
  const textFieldElement = screen.getByLabelText("structure", {exact:false})
  expect(textFieldElement).toBeInTheDocument()
})