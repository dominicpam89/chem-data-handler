import { screen } from "@testing-library/react"
import ButtonActions from "./ButtonActions"
import { renderWithAllProviders } from "../../data/utils/test"

const renderComp = ()=>{
  renderWithAllProviders(<ButtonActions />)
}

test("display search button as submit", ()=>{
  renderComp()
  const searchButtonElement = screen.getByRole("button", {name:/submit/i})
  expect(searchButtonElement).toBeInTheDocument()
})

test("display 'back to Compounds' button to leave page", ()=>{
  renderComp()
  const leaveButton = screen.getByRole("button", {name:/exit/i})
  expect(leaveButton).toBeInTheDocument()
})