'use client'

import search from "./search.module.scss"

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({show, onClose, children}: ModalProps){
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