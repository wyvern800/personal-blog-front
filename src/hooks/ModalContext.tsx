import React, { createContext, useState, useContext } from 'react';
import { ModalStates } from '../types/modal.states';
import { ModalProviderProps } from '../types/modal.provider';
import { ContextType } from "../types/context";

const ModalContext = createContext<any>({});

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modalOpen, setModalOpen] = useState<ModalStates>({
    isModalOpen: false,
  });

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  const { modalOpen, setModalOpen } = context;

  return { modalOpen, setModalOpen };
}
