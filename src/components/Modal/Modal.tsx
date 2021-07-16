import React from 'react';
import Button from '../Button/Button';

export interface IModalProps {
  show?: boolean;
  title: string;
  description?: string;
  onClose: () => void;
}
const Modal: React.FC<IModalProps> = ({
  show = true,
  title,
  description,
  onClose,
}) => {
  return !show ? null : (
    <div className='modal'>
      <div className='modal-content'>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='modal-buttons'>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
