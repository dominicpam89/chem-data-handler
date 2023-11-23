import { useContext, useState } from "react"
import { ContextHomeUser } from "../../data/context/ContextHomeUser"
import { Stack, Typography, Box, IconButton, styled, useTheme } from "@mui/material"
import { utilsMUIHexToRgba as hexToRgba } from "../../utils/mui"
import CloseIcon from "@mui/icons-material/Close"
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown"
import { motion } from "framer-motion"

const HistoryList = styled(Box)(({ theme }) => ({
   display: "grid",
   gridTemplateColumns: "1fr",
   columnGap: theme.spacing(1),
   rowGap: theme.spacing(2),
   [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
   },
   [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
   },
}))

const Item = styled(Stack)(({ theme }) => ({
   padding: theme.spacing(2),
   border: `1px solid ${hexToRgba(theme.palette.primary.main, "0.3")}`,
   transition: "all 500ms ease",
   "&:hover": {
      cursor: "pointer",
   },
   "&.selected": {
      color: theme.palette.info.main,
   },
}))

const ItemBody = styled(Stack)(({ theme }) => ({
   display: "flex",
   flexDirection: "column",
}))

const SearchHistory = () => {
   const context = useContext(ContextHomeUser)
   const theme = useTheme()
   const isHistoryExist = context.selectedHistory.val.length > 0
   const [historyShow, setHistoryShow] = useState<boolean>(true)
   return (
      <>
         <Stack direction="column" spacing={2}>
            <Stack direction="row" alignItems="center">
               <Typography variant="body1" fontWeight={700} color={theme.palette.info.main}>
                  Search History
               </Typography>
               <motion.div
                  animate={{
                     rotate: historyShow ? 0 : -180,
                  }}
               >
                  <IconButton color="info" onClick={() => setHistoryShow(!historyShow)}>
                     <ExpandCircleDownIcon />
                  </IconButton>
               </motion.div>
            </Stack>
            {historyShow && (
               <HistoryList>
                  {!isHistoryExist && (
                     <Typography variant="body2" fontStyle="italic">
                        No history found
                     </Typography>
                  )}
                  {isHistoryExist &&
                     context.selectedHistory.val.map((item) => (
                        <Item
                           direction="row"
                           spacing={3}
                           alignItems="center"
                           key={item.id}
                           className={item.id === context.compoundSearch?.val?.id ? "selected" : ""}
                           onClick={() => context.compoundSearch.setVal(item)}
                        >
                           <IconButton
                              color="inherit"
                              onClick={(e) => {
                                 e.stopPropagation()
                                 context.selectedHistory.remove(item)
                                 if(item.id===context.compoundSearch.val?.id) context.compoundSearch.setVal(null)
                              }}
                           >
                              <CloseIcon fontSize="small" />
                           </IconButton>
                           <ItemBody>
                              <Typography variant="body2" fontWeight={600}>
                                 {item.chemical_compound}
                              </Typography>
                              <Typography variant="caption">{item.formula}</Typography>
                           </ItemBody>
                        </Item>
                     ))}
               </HistoryList>
            )}
         </Stack>
      </>
   )
}

export default SearchHistory
