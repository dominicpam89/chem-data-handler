import { useContext } from "react"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import { Box, Autocomplete, TextField, styled } from "@mui/material"
import { ButtonPrimary } from "../../UI/Button"
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
   gridTemplateColumns: "9fr 3fr",
   gap: theme.spacing(3),
   [theme.breakpoints.down("sm")]:{
      gridTemplateColumns: "1fr"
   }
}))

const Button = styled(ButtonPrimary)(({theme})=>({
   [theme.breakpoints.down("sm")]:{
      gridRow: "1/span 1",
   }
}))

const HomeUserSearchBar: React.FC<Props> = ({ data }) => {
   const context = useContext(ContextHomeUser)
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
               <Button variant="contained">Add New Compound</Button>
            </SearchBoxPanel>
           <SearchHistory />
         </SearchBox>
      </>
   )
}

export default HomeUserSearchBar
