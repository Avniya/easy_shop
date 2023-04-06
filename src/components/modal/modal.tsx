import React, { useState, useEffect } from 'react';
import ReactDom from "react-dom";
import styles from './modal.module.css';

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal = ({
  showModal, setShowModal, children
}: ModalProps) => {

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = showModal ? (
    <>
      <div 
        className={styles.modalWrapper}
        onClick={() => setShowModal(!showModal)}
      ></div>
      <div className={styles.modalConatiner}>
        {children}
      </div>
    </>
  ) : null
  
  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal-root")
    )
  } else {
    return null
  }
}

export default Modal