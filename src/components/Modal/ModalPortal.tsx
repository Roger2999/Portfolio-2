import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./ModalPortal.css";
import type { Skill } from "../Skills/SkillSection/SkillSection";
interface Props {
  children: ReactNode;
  selectedSkill: Skill | null;
  setSelectedSkill: React.Dispatch<React.SetStateAction<Skill | null>>;
}
export const ModalPortal = ({
  children,
  selectedSkill,
  setSelectedSkill,
}: Props) => {
  const closeModal = () => {
    setSelectedSkill(null);
  };
  const handleCloseContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSkill(null);
      }
    };
    if (selectedSkill) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [selectedSkill, setSelectedSkill]);

  const modalRoot = document.getElementById("modal");
  const modalRef = useRef<HTMLDivElement>(null);
  if (!selectedSkill || !modalRoot) return null;
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
