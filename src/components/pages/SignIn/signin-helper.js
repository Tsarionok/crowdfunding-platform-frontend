import { makeStyles } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

export const signInFields = [
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    name: 'email',
    autoComplete: 'email'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    autoComplete: 'current-password'
  },
].map(signInField => ({ ...signInField, key: uuidv4() }));
