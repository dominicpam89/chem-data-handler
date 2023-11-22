import { IconContext } from "react-icons";
import { BiSolidAnalyse } from 'react-icons/bi';
import { useTheme, styled, Box } from "@mui/material"

const StyledDiv = styled(Box)(({theme})=>({
    width: "100%",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    alignItems: "center"
}))

const StyledHeading = styled("h1")(({theme})=>({
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.grey[100]
}))

const UISidebarNavPersistHeader = () => {
  const theme = useTheme()
  return (
    <StyledDiv>
      <IconContext.Provider value={{ style: {width: 44, height: 44, color: theme.palette.grey[100]} }}>
        <BiSolidAnalyse />
      </IconContext.Provider>
      <StyledHeading>{import.meta.env.VITE_APP_NAME}</StyledHeading>
    </StyledDiv>
  );
};

export default UISidebarNavPersistHeader;
