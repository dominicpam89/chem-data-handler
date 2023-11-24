import React from "react"
import { styled, Box } from "@mui/material"
import { TypePropsUIModal } from "../data/types/props"
import { createPortal } from "react-dom"
import { utilsMUIHexToRgba as hexRgba } from "../utils/mui"

const modal: Element | DocumentFragment | any = document.querySelector("#modal")

const Backdrop = styled(Box)(({ theme }) => ({
   position: "fixed",
   zIndex: 150,
   top: 0,
   left: 0,
   width: "100vw",
   height: "100vh",
   backgroundColor: hexRgba(theme.palette.grey[900],"0.5"),
}))

export const ModalContainer = styled(Box)(({ theme }) => ({
   position: "fixed",
   zIndex: 200,
   left: 0,
   top: 0,
   backgroundColor: theme.palette.grey[100],
   color: theme.palette.grey[900],
}))

const UIModalGeneral: React.FC<TypePropsUIModal> = ({ children, onClose }) => {
   return (
      <>
         {createPortal(
            <>
               <Backdrop onClick={onClose} aria-label="backdrop">
                  {children}
               </Backdrop>
            </>,
            modal
         )}
      </>
   )
}

export default UIModalGeneral
