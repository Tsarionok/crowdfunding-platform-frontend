import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Crowdfounding
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export const signUpFields = [
  {
    id: 'email',
    label: 'Email Address',
    name: 'email',
    autoComplete: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    name: 'password',
    autoComplete: 'current-password',
  },
  {
    id: 'passwordConfirm',
    label: 'Confirm Password',
    type: 'password',
    name: 'passwordConfirm',
    autoComplete: 'current-password',
  },
].map(signUpField => ({ ...signUpField, key: uuidv4() }));;
