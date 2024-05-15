"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, hasCloseBtn, onClose, children }) {
  const modalRef = useRef();
  const [isModalOpen, setModalOpen] = useState(isOpen);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key == "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  });

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className={`mr-0 min-h-full backdrop:bg-black/25 ${styles.dialog}`}
    >
      {hasCloseBtn && <button className="modal-close-btn">Close</button>}
      {children}
    </dialog>
  );
}

export default Modal;
