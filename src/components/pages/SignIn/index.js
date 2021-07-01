import React from 'react';
import { useStyles, signInFields } from './signin-helper';
import SignIn from './SignIn';


const SignInPage = {
  component: SignInContainer,
  path: '/sign-in'
}

function SignInContainer() {
  const classes = useStyles();
  const [loginData, setLoginData] = React.useState({
    password: '',
    email: '',
  });

  const onClick = React.useCallback(() => {}, []);

  const onChange = React.useCallback(
    (e) => {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      });
    },
    [loginData],
  );

  return (
    <SignIn
      classes={classes}
      onChange={onChange}
      onClick={onClick}
      signInFields={signInFields}
    />
  );
}

export default SignInPage;
