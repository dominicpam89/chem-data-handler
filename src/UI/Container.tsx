import { Box, styled } from "@mui/material"
import { TypePropsChildren } from "../data/types/props";

const StyledBox = styled(Box)(({theme})=>({
  width: "100%",
  padding: `0 ${theme.spacing(3)}`,
  paddingTop: "70px",
  [theme.breakpoints.up("md")]:{
    width: "75%",
    padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
    marginLeft: "25%",
  },
  [theme.breakpoints.up("lg")]:{
    width: "80%",
    marginLeft: "20%"
  }
}))

const UIContainer:React.FC<TypePropsChildren> = ({children}) => {
  return <>
    <StyledBox>
      {children}
    </StyledBox>
  </>
}
 
export default UIContainer;