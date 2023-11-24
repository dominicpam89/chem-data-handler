import { useContext } from "react"
import { TypeChems } from "../../data/types/query-result"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import { Autocomplete, TextField } from "@mui/material"

type Props = {
   data: TypeChems[]
}

const CompoundSearchBar: React.FC<Props> = ({ data }) => {
   const context = useContext(ContextHomeUser)
   return (
      <>
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
      </>
   )
}

export default CompoundSearchBar
