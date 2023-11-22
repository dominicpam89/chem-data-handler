import { IconContext } from "react-icons";
import { BiSolidAnalyse } from 'react-icons/bi';
import { Box, Typography, styled, useTheme } from "@mui/material"

const StyledBox = styled(Box)(({theme})=>({
  width: "100%",
  marginTop: theme.spacing(3),
  padding: theme.spacing(4),
  display: "Flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  alignItems: "center"
}))

const StyledHeading = styled(Typography)(({theme})=>({
  fontSize: "18px",
  fontWeight: "800",
  color: "transparent",
  background: `linear-gradient(105deg, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
  WebkitBackgroundClip: "text"
}))

const UISidebarHeader = () => {
  const theme = useTheme()
  return (
    <StyledBox>
      <IconContext.Provider value={{ style: {width: 44, height: 44, color: theme.palette.primary.main} }}>
        <BiSolidAnalyse />
      </IconContext.Provider>
      <StyledHeading>{import.meta.env.VITE_APP_NAME}</StyledHeading>
    </StyledBox>
  );
};

export default UISidebarHeader;
