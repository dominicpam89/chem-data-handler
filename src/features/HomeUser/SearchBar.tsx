import { useContext } from "react"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import {
   Box,
   Autocomplete,
   TextField,
   styled,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   ListItemButton,
} from "@mui/material"
import { utilsMUIHexToRgba as hexToRGBA } from "../../utils/mui"
import { TypeChems } from "../../data/types/query-result"
import CloseIcon from "@mui/icons-material/Close"

type Props = {
   data: TypeChems[]
}

const SearchBox = styled(Box)(({ theme }) => ({
   display: "flex",
   flexDirection: "column",
   gap: theme.spacing(3),
   width: "100%",
   [theme.breakpoints.up("lg")]: {
      maxWidth: "300px",
   },
}))

const StyledList = styled(List)(({ theme }) => ({
   padding: theme.spacing(2),
   border: `${hexToRGBA(theme.palette.primary.main, "0.2")} 1px solid`,
   borderRadius: theme.spacing(1),
   boxShadow: `5px 5px 2px 5px ${hexToRGBA(theme.palette.common.black, "0.03")}`,
}))

const HomeUserSearchBar: React.FC<Props> = ({ data }) => {
   const context = useContext(ContextHomeUser)
   return (
      <>
         <SearchBox id="search-bar-search-box">
            <Autocomplete
               id="search-bar-autocomplete"
               value={context.compoundSearch.val}
               onChange={(_, val) => {
                  context.compoundSearch.setVal(val)
                  // if compound doesn't exist, then add to selectedHistory
                  const compoundExist = val && context.selectedHistory.val.includes(val)
                  if (val && !compoundExist) context.selectedHistory.setVal(val)
               }}
               disablePortal
               options={data}
               includeInputInList
               getOptionLabel={(option: TypeChems) => option.chemical_compound}
               renderInput={(params) => <TextField {...params} label="Compounds" />}
            />

            {context.selectedHistory.val.length > 0 && (
               <StyledList id="search-bar-list">
                  {context.selectedHistory.val.map((item) => {
                     return (
                        <ListItem key={item.id}>
                           <ListItemIcon
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                 context.selectedHistory.remove(item)
                              }}
                           >
                              <CloseIcon />
                           </ListItemIcon>
                           <ListItemButton
                              onClick={() => {
                                 context.compoundSearch.setVal(item)
                              }}
                           >
                              <ListItemText primary={item.chemical_compound} secondary={item.formula} />
                           </ListItemButton>
                        </ListItem>
                     )
                  })}
               </StyledList>
            )}
         </SearchBox>
      </>
   )
}

export default HomeUserSearchBar
