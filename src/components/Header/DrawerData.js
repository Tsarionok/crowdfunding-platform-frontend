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
    logged: true,
    forAdminAndEditor: true
  },
  {
    title: 'Profile',
    path: '/profiles/me',
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