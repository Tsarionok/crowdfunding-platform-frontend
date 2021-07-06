import React from 'react';
import { useStyles } from './signup-helper';
import SignUp from './SignUp';

const SignUpPage = {
  component: SignUpContainer,
  path: '/sign-up'
}

function SignUpContainer() {
  const classes = useStyles();
  const [registrationData, setRegistrationData] = React.useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    passwordConfirm: '',
  });

  const onSubmit = React.useCallback(() => { 
    setRegistrationData(() => ({
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      passwordConfirm: '',
    }))
    console.log(registrationData);
  },[registrationData]);

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
