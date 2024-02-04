import { Stack, Typography } from "@mui/material";
import { redirect } from "react-router-dom";

const PageLogout = () => {
  return <Stack direction="column" spacing={2}>
    <Typography variant="h3" component="h1">Functional Logout</Typography>
    <Typography variant="body1" component="p">Wait for another API</Typography>
  </Stack>
}
 
export default PageLogout

export const loaderLogout = async()=>{
  return redirect("/auth")
}