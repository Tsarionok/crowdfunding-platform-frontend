import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useFormData } from '../../hooks';
import { deleteUser, changePassword, getCurrentUser } from '../../../redux/actions';
import { ProfileFormData } from './Profile-helper';
import Profile from './Profile';

const ProfilePage = {
  component: ProfileContainer,
  path: '/profiles/:profileId'
}

function ProfileContainer() {
  const history = useHistory();
  const { profileId } = useParams();
  const dispatch = useDispatch();
  const { auth: { user, currentUser } } = useSelector(state => state);

  const [state, setState] = React.useState({ 
    switchEnabled: false, 
    changingPassword: false,
    oldPassword: '',
    newPassword: ''
  });
  const formData = useFormData(ProfileFormData);

  const onAuthenticationToggle = React.useCallback(() => {
    setState(previousState => ({ ...previousState, switchEnabled: !previousState.switchEnabled }))
  }, []);

  const setChangingPassword = React.useCallback((changingPassword) => {
    setState(previousState => ({ ...previousState, changingPassword }));
  }, []);

  const onFieldChange = React.useCallback((e) => {
    setState(previousState => ({ ...previousState, [e.target.name]: e.target.value }));
  }, []); 

  const onDeleteUser = React.useCallback(() => {
    if (user) {
      dispatch(deleteUser(user.id));
    }
  }, [dispatch, user]);

  const onChangePassword = React.useCallback(() => {
    if (user && history)
      dispatch(changePassword({ ...state, id: user.id }, history));
    setState({ oldPassword: '', newPassword: '' });
  }, [dispatch, state, user, history]);

  React.useEffect(() => {
    if (profileId)
      dispatch(getCurrentUser(profileId));
  }, [dispatch, profileId]);

  return (
    <React.Fragment>
      { !currentUser ? (
        <h3>User does not exist</h3>
      ): (
        <Profile
          {...formData} 
          {...state}
          currentUser={currentUser}
          setChangingPassword={setChangingPassword}
          onAuthenticationToggle={onAuthenticationToggle} 
          onFieldChange={onFieldChange}
          onChangePassword={onChangePassword}
          onDeleteUser={onDeleteUser}
        />
      ) }
    </React.Fragment>
  )
}

export default ProfilePage;
