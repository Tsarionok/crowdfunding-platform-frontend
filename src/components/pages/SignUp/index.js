import React from 'react';
import { useDispatch } from 'react-redux';
import {
  useHistory
} from "react-router-dom";
import { register } from '../../../redux/actions';
import { useStyles } from './signup-helper';
import SignUp from './SignUp';

const SignUpPage = {
  component: SignUpContainer,
  path: '/sign-up'
}

function SignUpContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [registrationData, setRegistrationData] = React.useState({
    password: '',
    email: '',
    passwordConfirm: '',
  });

  const onSubmit = React.useCallback(() => { 
    dispatch(register({ ...registrationData, history }));

    setRegistrationData(() => ({
      email: '',
      password: '',
      passwordConfirm: '',
    }));
  },[dispatch, history, registrationData]);

  const onChange = React.useCallback(
    (e) => {
      setRegistrationData({
        ...registrationData,
        [e.target.name]: e.target.value,
      });
    },
    [registrationData],
  );

  return (
    <SignUp
      classes={classes}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default SignUpPage;
