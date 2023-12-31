import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import { Box, Stack, Autocomplete, TextField, styled } from "@mui/material"
import { ButtonPrimary as BP, ButtonError as BE } from "../../UI/Button"
import { TypeChems } from "../../data/types/query-result"
import SearchHistory from "./SearchHistory"

type Props = {
   data: TypeChems[]
}

const SearchBox = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "column",
   gap: theme.spacing(4),
   width: "100%",
}))

const SearchBoxPanel = styled(Box)(({ theme }) => ({
   display: "grid",
   gridTemplateColumns: "6fr 6fr",
   gap: theme.spacing(3),
   [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
   },
}))

const ButtonPrimary = styled(BP)(({}) => ({
   width: "100%",
   height: "100%",
   borderRadius: "0.6rem",
}))

const ButtonError = styled(BE)(({}) => ({
   width: "100%",
   height: "100%",
   borderRadius: "0.6rem",
}))

const HomeUserSearchBar: React.FC<Props> = ({ data }) => {
   const context = useContext(ContextHomeUser)
   const navigate = useNavigate()
   return (
      <>
         <SearchBox id="search-bar-search-box">
            <SearchBoxPanel>
               <Autocomplete
                  id="search-bar-autocomplete"
                  value={context.compoundSearch.val}
                  onChange={(_, val) => {
                     context.compoundSearch.setVal(val)
                     const compoundExist = val && context.selectedHistory.val.includes(val)
                     if (val && !compoundExist) context.selectedHistory.setVal(val)
                  }}
                  disablePortal
                  options={data}
                  getOptionLabel={(option: TypeChems) => option.chemical_compound}
                  renderInput={(params) => <TextField {...params} label="Compounds" />}
               />
               <Stack direction="row" spacing={1}>
                  <ButtonError
                     variant="contained"
                     disabled={context.predictCompound.onPredictState.pending || context.compoundSearch.val===null}
                     onClick={context.predictCompound.onPredict}
                  >
                     Run Prediction
                  </ButtonError>
                  <ButtonPrimary variant="contained" onClick={()=>navigate("/operation")}>New Compound</ButtonPrimary>
               </Stack>
            </SearchBoxPanel>
            <SearchHistory />
         </SearchBox>
      </>
   )
}

export default HomeUserSearchBar
