import { useContext } from "react"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import { styled, Typography, Stack, Box, Paper, Alert, Button, ButtonGroup, Chip, IconButton } from "@mui/material"
import CancelIcon from "@mui/icons-material/Cancel"

// Demo purposes
import { useHooksDisplaySearch } from "../../data/hooks/temp"
import toast from "react-hot-toast"

const StyledUICard = styled(Paper)(({ theme }) => ({
   position: "relative",
   maxWidth: "100%",
   width: "100%",
   padding: theme.spacing(1),
   display: "grid",
   gridTemplateColumns: "8fr 4fr",
   gap: theme.spacing(2),
   [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
   },
   [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
   },
}))

const CloseIconContainer = styled(Box)(() => ({
   position: "absolute",
   top: 0,
   right: 0,
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}))

const HomeUserDisplaySearch = () => {
   const context = useContext(ContextHomeUser)
   const { displayError, displayResult, setDisplayResult, setDisplayError } = useHooksDisplaySearch()
   return (
      <>
         {context.compoundSearch.val !== null && (
            <StyledUICard id="display-search searched-compound" elevation={3}>
               <CloseIconContainer>
                  <IconButton onClick={()=>context.compoundSearch.setVal(null)}>
                     <CancelIcon sx={{ fontSize: "2rem" }} />
                  </IconButton>
               </CloseIconContainer>
               <Stack direction="column" spacing={1}>
                  <Typography variant="h4" component="h2">
                     {context.compoundSearch.val?.common_name}
                  </Typography>
                  <Typography variant="h3">{context.compoundSearch.val?.chemical_compound}</Typography>
                  <Typography variant="h5">{context.compoundSearch.val?.formula}</Typography>
               </Stack>

               {/* Demo Purposes */}
               <Stack direction="column" spacing={3}>
                  {displayError && (
                     <Alert severity="error" sx={{ alignSelf: "start" }} onClick={() => setDisplayError(false)}>
                        <Stack direction="column" spacing={1}>
                           <span>This compound couldn't be predicted! Since it was made for demo purposes, API calls was made using random Math, therefore, <b>try again until succeed!</b></span>
                           <Chip label="click to delete" />
                        </Stack>
                     </Alert>
                  )}
                  {displayResult && (
                     <Stack direction="column" spacing={2} alignItems="flex-end">
                        <Alert severity="success" sx={{ alignSelf: "start" }}>
                           Prediction result: {context.predictCompound.data}
                        </Alert>
                        <ButtonGroup fullWidth>
                           <Button
                              variant="contained"
                              onClick={() => {
                                 toast.success("Saved!")
                                 setDisplayResult(false)
                              }}
                           >
                              Save?
                           </Button>
                           <Button variant="outlined" onClick={() => setDisplayResult(false)}>
                              Cancel
                           </Button>
                        </ButtonGroup>
                     </Stack>
                  )}
               </Stack>
            </StyledUICard>
         )}
      </>
   )
}

export default HomeUserDisplaySearch
