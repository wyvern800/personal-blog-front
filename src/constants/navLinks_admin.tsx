import { AiOutlineHome } from "react-icons/ai";
import { FaBuffer } from "react-icons/fa";
import { BiExit } from "react-icons/bi";

export const navLinks_admin = [
  {
    icon: AiOutlineHome,
    title: 'Overview',
    linkTo: '/admin',
  },
  {
    icon: FaBuffer,
    title: 'Posts',
    linkTo: '/admin/posts',
  },
  {
    icon: BiExit,
    title: 'Logout',
    linkTo: '/logout',
  },
];
