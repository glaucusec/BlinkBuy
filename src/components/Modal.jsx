"use client";
import React, { useEffect, useState, useRef } from "react";

function Modal({ isOpen, hasCloseBtn, onClose, children }) {
  const modalRef = useRef();
  const [isModalOpen, setModalOpen] = useState(isOpen);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
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
      className="backdrop:bg-black/25"
    >
      {hasCloseBtn && (
        <button className="modal-close-btn" onClick={handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
}

export default Modal;
