import { Dispatch, SetStateAction } from "react";
import { ModalStates } from "./modal.states";

export type LoginModalProps = {
  loginModalOpen?: ModalStates;
  setLoginModalOpen?: Dispatch<SetStateAction<ModalStates>>;
  onModal?: boolean;
};
