import { TypePropsChildren } from "../../data/types/props"
import { Stack, useTheme } from "@mui/material"

const UICardHeader: React.FC<TypePropsChildren> = ({ children }) => {
   const theme = useTheme()
   return (
      <>
         <Stack
            aria-label="UICardHeader"
            width={"100%"}
            padding={`${theme.spacing(2)} ${theme.spacing(4)}`}
            direction={"column"}
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
         >
          {children}
         </Stack>
      </>
   )
}

export default UICardHeader
