import { styled, Box } from "@mui/material"
import { createPortal } from "react-dom"
import { CircularProgress } from '@mui/material';
import { utilsMUIHexToRgba as hexToRgba } from "../../utils/mui";

const modal: Element | DocumentFragment | any = document.querySelector("#modal")

const StyledBox = styled(Box)(({theme})=>({
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

const UIFeedbackLoading = () => {
  return createPortal(
  <>
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  </>,modal)
}
 
export default UIFeedbackLoading;