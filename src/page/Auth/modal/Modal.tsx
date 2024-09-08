/** @format */

import React from 'react';
import './Modal.scss';

export const Modal = ({ children, openModal, setOpenModal }) => {
  return (
    <div className={`Modal ${openModal ? 'stickyModal' : ''}`}>
      <div className="ModalLayout">
        <button onClick={() => setOpenModal((prev) => !prev)} className='close__modal'>X</button>
        {children}
      </div>
    </div>
  );
};
