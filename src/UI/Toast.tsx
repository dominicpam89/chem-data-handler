import { Stack, Typography, IconButton } from "@mui/material"
import { TypeUIToast } from "../data/types/props"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import ClearIcon from "@mui/icons-material/Clear"

const UIToast: React.FC<TypeUIToast> = ({ t, message }) => {
   return (
      <Stack direction="row" spacing={"5px"} alignItems="center">
         <Typography variant="body2">{message}</Typography>
         <motion.div
            animate={{
               rotate: [-15,15],
            }}
            transition={{
               repeat: Infinity,
               repeatType: "mirror",
               // type: "spring",
               duration: 0.8,
               ease: "easeInOut"
            }}
         >
            <IconButton color="inherit" onClick={() => toast.dismiss(t.id)} sx={{ padding: "0" }}>
               <ClearIcon />
            </IconButton>
         </motion.div>
      </Stack>
   )
}

export default UIToast
