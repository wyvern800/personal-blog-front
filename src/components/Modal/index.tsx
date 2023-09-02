import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ReactResponsiveModal } from 'react-responsive-modal';
import { ModalType } from '../../types/modal';
import '../../styles/responsive-modal.css';

const Modal = ({
  center = true,
  open,
  setOpen,
  onCloseModal,
  classNames = { modal: 'global' },
  title,
  children,
}: ModalType) => {
  return (
    <div>
      <ReactResponsiveModal
        open={open.isModalOpen}
        onClose={() => {
          setOpen(false);
          if (onCloseModal) {
            onCloseModal();
          }
        }}
        center={center}
        classNames={classNames}
      >
        <h2 style={{ fontSize: '1.3rem', marginTop: '30px' }}>{title}</h2>
        {children}
      </ReactResponsiveModal>
    </div>
  );
};

export default Modal;
