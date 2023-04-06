import React, { useState } from 'react'

interface HeaderProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({showModal, setShowModal}: HeaderProps) => {  
  return (
    <div
      onClick={() => setShowModal(!showModal)}
    >
      Login/Register
    </div>
  )
}

export default Header