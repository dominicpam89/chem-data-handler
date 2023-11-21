import { useTheme } from "@mui/material"
import { Toaster } from "react-hot-toast"
import { createPortal } from "react-dom"

const modal: Element | DocumentFragment | any = document.querySelector("#modal")

const UIToaster = () => {
   const theme = useTheme()
   const content = createPortal(
      <Toaster
         position="top-center"
         gutter={8}
         toastOptions={{
            duration: 5000,
            style: {
               background: theme.palette.primary.dark,
               color: theme.palette.common.white,
            },
         }}
      />,
      modal
   )
   return content
}

export default UIToaster
