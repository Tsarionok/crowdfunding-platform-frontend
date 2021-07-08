import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useHistory,
  Redirect
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

  const { auth } = useSelector(state => state)

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
      setRegistrationData(previousState => ({
        ...previousState,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );

  if (auth.isAuthenticated && auth.user) {
    return <Redirect to={`/profiles/${auth.user.id}`} />;
  }

  return (
    <SignUp
      classes={classes}
      onChange={onChange}
      onSubmit={onSubmit}
      inputValues={registrationData}
    />
  );
}

export default SignUpPage;
