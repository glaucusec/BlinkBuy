"use client";
import React, { useEffect, useState, useRef } from "react";
import { IconX } from "@tabler/icons-react";
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
      className={`backdrop:bg-black/25 rounded-xl p-4 ${styles.dialog}`}
    >
      {hasCloseBtn && (
        <button
          onClick={handleCloseModal}
          className="modal-close-btn hover:bg-gray-300 rounded-xl p-1"
        >
          <IconX />
        </button>
      )}
      {children}
    </dialog>
  );
}

export default Modal;
