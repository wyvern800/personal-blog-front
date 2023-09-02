import { ModalProps } from "react-responsive-modal";
import { ReactChildren, SetStateAction, IntrinsicAttributes } from 'react';
import { ModalStates } from './modal.states';

export type ModalType = {
  title: string;
  center?: boolean | undefined;
  open: ModalStates;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onCloseModal: () => void;
  classNames?: ModalProps.classNames;
  children: IntrinsicAttributes & ReactChildren;
};
