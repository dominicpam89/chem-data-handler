import { render, screen } from "@testing-library/react"
import InputSearch from "./InputSearch"
import { TInputSearch } from "../../data/utils/pubchem"

const inputFilterMockCID:TInputSearch = "cid"
const inputFilterMockName:TInputSearch = "name"
const inputFilterMockSmiles:TInputSearch = "smiles"

test("inputSearch as cid", ()=>{
  render(<InputSearch inputFilter={inputFilterMockCID} />)
  const textFieldElement = screen.getByLabelText("id", {exact:false})
  expect(textFieldElement).toBeInTheDocument()
})

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