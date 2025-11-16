import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { SimpleButton } from "../SimpleButton/SimpleButton";

interface ModalProps {
  id?: string;
  modalTitle?: string;
  description?: string[] | string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  modalTitle,
  description,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return createPortal(
    <div className="modal modal-open">
      <div className="modal-box relative">
        <h3 id={id ? `${id}-title` : undefined} className="font-bold text-lg">
          {modalTitle}
        </h3>

        <div className="py-4">
          {Array.isArray(description)
            ? description.map((item) => (
                <SimpleButton className="btn btn-dash mr-2 mb-2" key={item}>
                  {item}
                </SimpleButton>
              ))
            : description}
        </div>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
