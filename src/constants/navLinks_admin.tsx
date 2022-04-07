import { FaBuffer } from "react-icons/fa";
import { BiExit } from "react-icons/bi";

export const navLinks_admin = [
  {
    icon: FaBuffer,
    title: 'Posts',
    linkTo: '/posts/add',
  },
  {
    icon: BiExit,
    title: 'Deslogar',
    linkTo: '/logout',
  },
];
