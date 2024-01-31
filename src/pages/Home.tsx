import { Typography } from "@mui/material";
import { redirect } from "react-router-dom";

const PageHome = () => {
  // Can be filled with anyting related to Home Page
  // For now it is redirecting to /predict
  return <>
    <Typography variant="h3" component="h1">PageHome</Typography>
  </>
}
 
export default PageHome;

export const loader = async()=>{
  return redirect("/predict")
}