import React from 'react';
import { AiFillHome, AiOutlineForm, AiFillProject } from 'react-icons/ai';
import { GoSignIn, GoSignOut } from 'react-icons/go';

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
    logged: false,
  },
  {
    title: 'Profile',
    path: '/profiles/me',
    icon: <AiFillProject />,
    logged: false
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiFillProject />,
    logged: false
  },
  {
    title: 'Create Project',
    path: '/create-project',
    icon: <AiFillProject />,
    logged: false
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