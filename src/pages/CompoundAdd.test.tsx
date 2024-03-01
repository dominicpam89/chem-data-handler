import { screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import {default as AddCompound} from "./CompoundAdd"
import { renderWithAllProviders } from "../data/utils/test"

const renderComp = ()=>{
  renderWithAllProviders(<AddCompound />)
}

const renderCompForm = ()=>{
  renderWithAllProviders(<AddCompound />)
  const formElement = screen.getByRole("form", {name:"pubchem-search-form"})
  const formScreen = within(formElement)
  return formScreen
}

/* 
  Homework
*/
describe("basic UI for navigation and panel info", ()=>{
  test("display top level container with name compound-add-container", ()=>{
    renderComp()
    const containerElement = screen.getByRole("generic", {name:"compound-add-container"})
    expect(containerElement).toBeInTheDocument()
  })
  test("display container with name pubchem-search-container", ()=>{
    renderComp()
    const containerElement = screen.getByRole("generic", {name:"pubchem-search-container"})
    expect(containerElement).toBeInTheDocument()
  })
  test("display form title 'Pubchem Search' ", ()=>{
    renderComp()
    const titleElement = screen.getByRole("heading", {name:/\b(?=.*\bpubchem\b)(?=.*\bsearch\b)/i})
    expect(titleElement).toBeInTheDocument()
  })
  test("display navigation back to compounds and test user-click", async ()=>{
    const user = userEvent.setup()
    const mockNavigation = vi.fn().mockImplementation(()=>{"back to Compounds"})
    renderComp()
    const navigationBackToCompound = screen.getByRole("button", {name:/exit/i})
    expect(navigationBackToCompound).toBeInTheDocument()
    await user.click(navigationBackToCompound)
    await mockNavigation()
    expect(mockNavigation).toHaveBeenCalledTimes(1)
  })
  test("display submit button", ()=>{
    renderComp()
    const submitButton = screen.getByRole("button", {name:/submit/i})
    expect(submitButton).toBeInTheDocument()
  })
})

describe.only("basic UI Form of search pubchem form",()=>{
  // test whether the form is in the component
  test("form named pubchem-search-form", ()=>{
    renderComp()
    const formElement = screen.getByRole("form", {name:"pubchem-search-form"})
    expect(formElement).toBeInTheDocument()
  })

  // test whether 1 options element (dubbed selectOption) is in the form
  test("display 1 options element in the form, which consist value of byName, and bySmiles", async ()=>{
    const user = userEvent.setup()
    const screenForm = renderCompForm()
    const selectOption = screenForm.getByRole("combobox", {name:/\b(?=.*\binput\b)(?=.*\bfilter\b)/i})
    expect(selectOption).toBeInTheDocument()

    expect(selectOption).toHaveTextContent(/name/i)

    // assertion and simulate if user select smiles as filter in selectOption
    await user.click(selectOption)
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Enter}')
    expect(selectOption).toHaveTextContent(/smile/i)
  })

  // test whether inputSearch display label text input based on the filter (options element)
  test("display 1 textfield based on input filter, may be byName, and bySmiles", async ()=>{
    const user = userEvent.setup()
    const screenForm = renderCompForm()
    const selectOption = screenForm.getByRole("combobox", {name:/\b(?=.*\binput\b)(?=.*\bfilter\b)/i})
    expect(selectOption).toBeInTheDocument()
    
    // input search as default option
    let inputSearch = screenForm.getByLabelText("name", {exact:false})
    expect(inputSearch).toBeInTheDocument()

    // input search when selectOption is selected to "smiles"
    await user.click(selectOption)
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Enter}")
    inputSearch = screenForm.getByLabelText("structure", {exact:false})
    expect(inputSearch).toBeInTheDocument()

  })
})

describe("submit form in successful Response, and return all data without operation", ()=>{
  test("display result if the filter is byCid", ()=>{})
  test("display result if the filter is byName", ()=>{})
  test("display result if the filter is bySmile", ()=>{})
})
describe("submit form in error Response, and return Error Data", ()=>{
  test("display error result if the filter is byCid", ()=>{})
  test("display error result if the filter is byName", ()=>{})
  test("display error result if the filter is bySmile", ()=>{})
})

