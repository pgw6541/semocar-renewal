'use client'

import React from "react";
import search from "./search.module.scss"

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({show, onClose, children}) => {
  // false값이 들어오면 null값을 리턴
  if(!show){
    return null
  }

  return(
    <div className={search.modal}>
      <div className={search.modal_content}>
        <span className={search.close} onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  )
}

export default Modal;