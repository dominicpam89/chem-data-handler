import React from "react";
import { InterfacePropsUIModal } from "../data/interfaces/props";
import { createPortal } from "react-dom";

const modal: Element | DocumentFragment | any =
  document.querySelector("#modal");

const UIModal: React.FC<InterfacePropsUIModal> = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <>
          <div
            onClick={onClose}
            aria-label="backdrop"
            className="fixed z-[100] top-0 left-0 w-screen h-screen bg-gray-950/50"
          ></div>
          <div aria-label='modal-container' className="fixed z-[150] right-0 top-0 w-[200px] h-screen bg-gray-100 text-gray-900 text-sm">
            {children}
          </div>
        </>,
        modal
      )}
    </>
  );
};

export default UIModal;
