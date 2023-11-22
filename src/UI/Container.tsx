import { Box, styled } from "@mui/material"
import { TypePropsChildren } from "../data/types/props";

const StyledBox = styled(Box)(({theme})=>({
  width: "100%",
  padding: `0 ${theme.spacing(4)}`,
  paddingTop: theme.spacing(12),
  [theme.breakpoints.up("sm")]:{
    width: "calc(100% - 240px)",
    padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
    marginLeft: "240px",
  },
}))

const UIContainer:React.FC<TypePropsChildren> = ({children}) => {
  return <>
    <StyledBox>
      {children}
    </StyledBox>
  </>
}
 
export default UIContainer;