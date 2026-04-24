"use client";
import { createContext, useContext, useState } from "react";
import EnquiryModal from "./EnquiryModal"; // Your refactored modal

const ModalContext = createContext({
  openModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
}