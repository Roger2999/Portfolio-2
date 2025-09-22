import { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}
export const Toast = ({ message, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);
  return (
    <>
      <div className="toast toast-end mb-20">
        <div className="alert alert-info">
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};
