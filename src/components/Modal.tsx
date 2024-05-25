"use client";
import React, { useEffect, useState, useRef } from "react";
import { IconX } from "@tabler/icons-react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: JSX.Element;
  position: string;
};

function Modal({
  isOpen,
  hasCloseBtn,
  onClose,
  children,
  position,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(isOpen);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
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
  }, [isModalOpen]);

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className={`backdrop:bg-black/35 ${position} animate-rightToLeftSlide shadow-2xl h-screen max-w-full max-h-full outline-none`}
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
