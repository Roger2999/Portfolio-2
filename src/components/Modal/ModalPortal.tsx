import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./ModalPortal.css";
interface Props {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalPortal = ({ children, openModal, setOpenModal }: Props) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  const handleCloseContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    };
    if (openModal) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [openModal, setOpenModal]);

  const modalRoot = document.getElementById("modal");
  const modalRef = useRef<HTMLDivElement>(null);
  if (!openModal || !modalRoot) return null;
  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modall" ref={modalRef} onClick={handleCloseContent}>
        {children}
        <button className="btn btn-neutral" type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};
