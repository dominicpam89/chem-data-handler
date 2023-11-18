import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import ContextMainProvider from "./data/context/ContextMain.tsx"
import { QueryClient, QueryClientProvider as QCP } from "@tanstack/react-query"
import MUIThemeProvider from "./data/UITheme/MaterialThemeProvider.tsx"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <QCP client={queryClient}>
         <ContextMainProvider>
            <MUIThemeProvider>
               <App />
            </MUIThemeProvider>
         </ContextMainProvider>
      </QCP>
   </React.StrictMode>
)
