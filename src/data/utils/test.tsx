import { render, RenderOptions } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ContextProvider from "../context/main"
import ThemeProvider from "../theme/ThemeProvider"
import { BrowserRouter as Router } from "react-router-dom"
import { PropsWithChildren } from "react"

const queryClient = new QueryClient()
const AppWithProviders:React.FC<PropsWithChildren> = ({children})=>{
  return <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <ThemeProvider>
        <Router>{children}</Router>
      </ThemeProvider>
    </ContextProvider>
  </QueryClientProvider>
}

export const renderWithAllProviders = (ui:React.ReactNode, options: RenderOptions={})=>{
  render(ui, {...options, wrapper: AppWithProviders})
}