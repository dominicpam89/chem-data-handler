import { TableContainer, Paper } from "@mui/material"

interface IContainer{
  children: React.ReactNode
}
const Container:React.FC<IContainer> = ({children})=>{
  return <TableContainer component={Paper} sx={{padding:6}}>
    {children}
  </TableContainer>
}

export default Container