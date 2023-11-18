import { useTheme } from "@mui/material"
import { Toaster } from "react-hot-toast"

const UIToaster = () => {
   const theme = useTheme()
   return (
      <Toaster
         position="top-center"
         gutter={8}
         toastOptions={{
            duration: 5000,
            style: {
               background: theme.palette.common.black,
               color: theme.palette.common.white,
            },
         }}
      />
   )
}

export default UIToaster
