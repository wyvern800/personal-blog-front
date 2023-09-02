import { AiOutlineHome } from 'react-icons/ai';
import { FaBuffer } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';

const navLinks: any = [
  {
    user: [
      {
        id: 1,
        icon: GoPerson,
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
        icon: GoPerson,
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
