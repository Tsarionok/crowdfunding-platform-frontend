import React from 'react';
import { useDispatch } from 'react-redux';
import { useStyles, signInFields } from './signin-helper';
import { login } from '../../../redux/actions';
import SignIn from './SignIn';


const SignInPage = {
  component: SignInContainer,
  path: '/sign-in'
}

function SignInContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = React.useState({
    password: '',
    email: '',
  });

  const onClick = React.useCallback(() => {
    dispatch(login(loginData));
  }, [dispatch, loginData]);

  const onChange = React.useCallback(
    (e) => {
      setLoginData(previousState => ({
        ...previousState,
        [e.target.name]: e.target.value
      }));
    },
    [],
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
