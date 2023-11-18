import { IconContext } from "react-icons"
import { BiSolidAnalyse } from "react-icons/bi"
import { Typography, useTheme } from '@mui/material'

interface Props {
   size: number
   color: "light" | "dark"
}

const UIBrand: React.FC<Props> = ({ size, color }) => {
   const theme = useTheme()
   const _size = String(size)
   let _color = color === "dark" ? theme.palette.primary.dark : theme.palette.primary.light
   return (
      <>
         <IconContext.Provider value={{ size:_size, color:_color }}>
            <BiSolidAnalyse />
         </IconContext.Provider>
         <Typography variant="h4" component="h1" color="primary">{import.meta.env.VITE_APP_NAME}</Typography>
      </>
   )
}

export default UIBrand
