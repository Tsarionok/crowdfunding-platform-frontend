import React from 'react';
import jwt from 'jsonwebtoken';
import { AiFillHome, AiOutlineForm, AiFillProject } from 'react-icons/ai';
import { GoSignIn, GoSignOut } from 'react-icons/go';

let profileId = 'me';

if (localStorage.token) {
  const { payload: { Id } } = jwt.decode(localStorage.getItem('token').slice(7), { complete: true });
  profileId = Id;
}

export const DrawerData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
  },
  {
    title: 'Admin Panel',
    path: '/admin-panel',
    icon: <GoSignIn />,
    logged: true,
    forAdminAndEditor: true
  },
  {
    title: 'Profile',
    path: `/profiles/${profileId}`,
    icon: <AiFillProject />,
    logged: true
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiFillProject />
  },
  {
    title: 'Create Project',
    path: '/create-project',
    icon: <AiFillProject />,
    logged: true
  },
  {
    title: 'Sign In',
    path: '/sign-in',
    icon: <GoSignIn />,
    logged: false,
  },
  {
    title: 'Sign Up',
    path: '/sign-up',
    icon: <AiOutlineForm />,
    logged: false,
  },
  {
    title: 'Log out',
    path: '/',
    icon: <GoSignOut />,
    logged: true,
  }
];