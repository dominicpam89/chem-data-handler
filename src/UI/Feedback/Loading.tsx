import { styled, Box } from "@mui/material"
import { CircularProgress } from '@mui/material';

const StyledBox = styled(Box)(()=>({
  position: "fixed",
  zIndex: "500",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}))

const UIFeedbackLoading = () => {
  return <>
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  </>
}
 
export default UIFeedbackLoading;