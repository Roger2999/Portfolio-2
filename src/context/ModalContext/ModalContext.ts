import { createContext } from "react";

export const ModalContext = createContext<{
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({ openModal: false, setOpenModal: () => null });
