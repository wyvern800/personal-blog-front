import React from 'react';
import Modal from '../../components/Modal';
import { InnerModal } from '../../styles/global';
import FormLogin from '../FormLogin';
import { LoginModalProps } from '../../types/login.modal';

const LoginModal = ({ loginModalOpen, setLoginModalOpen }: LoginModalProps) => {
  return (
    <Modal
      title={`Login`}
      open={loginModalOpen}
      setOpen={setLoginModalOpen}
      onCloseModal={() => {
        if (setLoginModalOpen) {
          setLoginModalOpen({
            ...loginModalOpen,
            isModalOpen: false,
          });
        }
      }}
    >
      <InnerModal>
        <FormLogin
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          onModal
        />
      </InnerModal>
    </Modal>
  );
};

export default LoginModal;
