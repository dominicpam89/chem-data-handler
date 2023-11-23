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

const ModalContainer = styled(Box)(({ theme }) => ({
   position: "fixed",
   zIndex: 200,
   right: 0,
   top: 0,
   width: "200px",
   height: "100vh",
   backgroundColor: theme.palette.grey[100],
   color: theme.palette.grey[900],
   fontSize: theme.typography.body1.fontSize,
}))

const UIModal: React.FC<TypePropsUIModal> = ({ children, onClose }) => {
   return (
      <>
         {createPortal(
            <>
               <Backdrop onClick={onClose} aria-label="backdrop"></Backdrop>
               <ModalContainer aria-label="modal-container">{children}</ModalContainer>
            </>,
            modal
         )}
      </>
   )
}

export default UIModal
