import { AiOutlineHome } from 'react-icons/ai';
import { FaBuffer } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

const navLinks = [
  {
    user: [
      {
        id: 1,
        icon: CgProfile,
        title: 'My Profile',
        linkTo: '/profile',
      },
      {
        id: 2,
        icon: BiExit,
        title: 'Logout',
        linkTo: '/logout',
      },
    ],

    admin: [
      {
        id: 1,
        icon: AiOutlineHome,
        title: 'Overview',
        linkTo: '/admin',
      },
      {
        id: 2,
        icon: FaBuffer,
        title: 'Posts',
        linkTo: '/admin/posts',
      },
      {
        id: 3,
        icon: CgProfile,
        title: 'My Profile',
        linkTo: '/profile',
      },
      {
        id: 4,
        icon: BiExit,
        title: 'Logout',
        linkTo: '/logout',
      },
    ],
  },
];

export default {
  navLinks,
};
