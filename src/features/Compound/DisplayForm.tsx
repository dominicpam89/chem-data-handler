import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import { TextField, styled, Paper, Box, Typography, Button, Stack } from "@mui/material"
import toast from "react-hot-toast"

const StyledForm = styled(Paper)(({ theme }) => ({
   padding: theme.spacing(8),
   display: "flex",
   flexDirection: "column",
   gap: theme.spacing(2),
}))

const StyledMiniForm = styled(Box)(({ theme }) => ({
   padding: theme.spacing(3),
   display: "flex",
   flexDirection: "column",
   gap: theme.spacing(1),
}))

type TypeFieldAdding = {
   label: string
   id: string
   name: string
   val: string
}

const CompoundDisplayForm = () => {
   const context = useContext(ContextHomeUser)
   const navigate = useNavigate()
   const [formState, setFormState] = useState({
      commonName: "",
      chemicalCompound: "",
      formula: "",
   })
   useEffect(() => {
      if (context.compoundSearch.val !== null) {
         setFormState({
            commonName: context.compoundSearch.val.common_name,
            chemicalCompound: context.compoundSearch.val.chemical_compound,
            formula: context.compoundSearch.val.formula,
         })
      }
   }, [context, setFormState])

   const [showMiniForm, setShowMiniForm] = useState(false)
   const [miniForm, setMiniForm] = useState({ label: "", val: "" })
   const [additionField, setAdditionField] = useState<TypeFieldAdding[]>([])

   return (
      <>
         {context.compoundSearch.val !== null && (
            <StyledForm>
               <Typography variant="h1" fontSize={14} textAlign={"center"} sx={{ marginBottom: "30px" }}>
                  Edit Compound from Pubchem
               </Typography>
               <TextField disabled label="Common Name" id="common_name" value={formState.commonName} />
               <TextField
                  disabled
                  label="Chemical Compound"
                  id="chemical_compound"
                  value={formState.chemicalCompound}
               />
               <TextField disabled label="Formula" id="formula" value={formState.chemicalCompound} />
               {additionField.length > 0 &&
                  additionField.map((field) => {
                     return (
                        <TextField
                           key={field.id}
                           label={field.label}
                           id={field.id}
                           name={field.name}
                           value={field.val}
                           disabled
                        />
                     )
                  })}
               <Stack direction="row" spacing={2}>
                  <Button fullWidth variant="outlined" onClick={() => setShowMiniForm(!showMiniForm)}>
                     {!showMiniForm ? "Add New Field":"Hide Field Form"}
                  </Button>
                  <Button fullWidth variant="contained" onClick={()=>{
                     toast.success("success adding to database")
                     navigate("/")
                  }}>
                     Add to Database
                  </Button>
               </Stack>
               {showMiniForm && (
                  <StyledMiniForm>
                     <TextField
                        label="Label?"
                        id="label?"
                        value={miniForm.label}
                        onChange={(e) => setMiniForm((ps) => ({ ...ps, label: e.target.value }))}
                     />
                     <TextField
                        label="Value?"
                        id="value?"
                        value={miniForm.val}
                        onChange={(e) => setMiniForm((ps) => ({ ...ps, val: e.target.value }))}
                     />
                     <Button
                        color="error"
                        variant="outlined"
                        onClick={() => {
                           if(!miniForm.label || !miniForm.val) return
                           setAdditionField((ps) => [
                              ...ps,
                              {
                                 label: miniForm.label,
                                 id: miniForm.label,
                                 name: String(miniForm.label.toUpperCase()),
                                 val: miniForm.val,
                              },
                           ])
                        }}
                     >
                        Add
                     </Button>
                  </StyledMiniForm>
               )}
            </StyledForm>
         )}
      </>
   )
}

export default CompoundDisplayForm
