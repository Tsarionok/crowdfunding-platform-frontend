import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect
} from "react-router-dom";
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
  const { auth } = useSelector(state => state)

  const [loginData, setLoginData] = React.useState({
    password: '',
    email: '',
  });

  const onClick = React.useCallback(() => {
    dispatch(login(loginData));

    setLoginData({ 
      password: '',
      email: '' 
    })
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

  if (auth.isAuthenticated && auth.user) {
    return <Redirect to={`/profiles/${auth.user.id}`} />;
  }

  return (
    <SignIn
      classes={classes}
      onChange={onChange}
      onClick={onClick}
      signInFields={signInFields}
      inputValuesObj={loginData}
    />
  );
}

export default SignInPage;
