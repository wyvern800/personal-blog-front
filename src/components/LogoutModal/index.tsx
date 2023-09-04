import React from "react";
import Modal from '../../components/Modal';
import { useModal } from '../../hooks/ModalContext';
import { InnerModal, Buttons } from '../../styles/global';
import Button from '../../components/Button';
import { useHistory } from "react-router-dom";

const LogoutModal = () => {
  const history = useHistory();
  const { modalOpen, setModalOpen } = useModal();

  return (
    <Modal
      title={`Are you sure you want to logout?`}
      open={modalOpen}
      setOpen={setModalOpen}
      onCloseModal={() => {
        setModalOpen({
          ...modalOpen,
          isModalOpen: false,
        });
      }}
    >
      <InnerModal>
        You will lose access to some features from the blog
      </InnerModal>
      <Buttons>
        <Button
          bgColor="rgba(137, 255, 87, 0.67)"
          onClick={() => {
            setModalOpen({
              ...modalOpen,
              isModalOpen: false,
            });
            history.push('/logout');
          }}
        >
          Yes
        </Button>
        <Button
          bgColor="red"
          onClick={() => {
            setModalOpen({
              ...modalOpen,
              isModalOpen: false,
            });
          }}
        >
          No
        </Button>
      </Buttons>
    </Modal>
  );
};

export default LogoutModal;
