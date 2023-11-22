import { styled, Box } from "@mui/material"
import { createPortal } from "react-dom"
import { utilsMUIHexToRgba as hexToRgba } from "../utils/mui";
import { TypePropsChildren } from "../data/types/props";

const modal: Element | DocumentFragment | any = document.querySelector("#modal")

export const StyledBox = styled(Box)(({theme})=>({
  position: "fixed",
  zIndex: "500",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: hexToRgba(theme.palette.primary.main,"0.3")
}))

const UIFeedback:React.FC<TypePropsChildren> = ({children}) => {
  return createPortal(
  <>
    <StyledBox>
      {children}
    </StyledBox>
  </>,modal)
}
 
export default UIFeedback;