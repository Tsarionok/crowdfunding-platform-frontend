import React from 'react';
import { AiFillHome, AiOutlineForm } from 'react-icons/ai';
import { GoSignIn, GoSignOut } from 'react-icons/go';

export const DrawerData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
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
    path: '/sign-in',
    icon: <GoSignOut />,
    logged: true,
  }
];