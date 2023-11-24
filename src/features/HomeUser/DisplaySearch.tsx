import { useContext } from "react"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import { styled, Typography, Stack, Paper, Alert, ButtonGroup, Chip } from "@mui/material"
import { ButtonPrimary } from "../../UI/Button"

// Demo purposes
import { useHooksDisplaySearch } from "../../data/hooks/temp"
import toast from "react-hot-toast"

const StyledUICard = styled(Paper)(({ theme }) => ({
   maxWidth: "100%",
   width: "100%",
   padding: theme.spacing(1),
   display: "grid",
   gridTemplateColumns: "8fr 4fr",
   gap: theme.spacing(1),
   [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
   },
   [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
   },
}))

const HomeUserDisplaySearch = () => {
   const context = useContext(ContextHomeUser)
   const { displayError, displayResult, setDisplayResult, setDisplayError } = useHooksDisplaySearch()
   return (
      <>
         {context.compoundSearch.val !== null && (
            <StyledUICard id="display-search searched-compound" elevation={3}>
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
                           <span>This compound couldn't be predicted!</span>
                           <Chip label="This is made for demo purposes, click to delete" />
                        </Stack>
                     </Alert>
                  )}
                  {displayResult && (
                     <Stack direction="column" spacing={2} alignItems="flex-end">
                        <Alert severity="success" sx={{ alignSelf: "start" }}>
                           Prediction result: {context.predictCompound.data}
                        </Alert>
                        <ButtonGroup fullWidth>
                           <ButtonPrimary
                              variant="contained"
                              onClick={() => {
                                 toast.success("Saved!")
                                 setDisplayResult(false)
                              }}
                           >
                              Save?
                           </ButtonPrimary>
                           <ButtonPrimary variant="outlined" onClick={() => setDisplayResult(false)}>
                              Cancel
                           </ButtonPrimary>
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
