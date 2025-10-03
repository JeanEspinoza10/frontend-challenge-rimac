import type { ReactNode } from "react";
import "@/components/loaders/modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button className="modal__close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <button className="modal__close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;