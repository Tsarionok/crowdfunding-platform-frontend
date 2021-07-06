import React from 'react';
import { useFormData } from '../../hooks';
import { ProfileFormData } from './Profile-helper';
import Profile from './Profile';

const ProfilePage = {
  component: ProfileContainer,
  path: '/profiles/:profileId'
}

function ProfileContainer() {
  const [state, setState] = React.useState({ switchEnabled: false })
  const formData = useFormData(ProfileFormData);

  const onAuthenticationToggle = React.useCallback(() => {
    setState(previousState => ({ ...previousState, switchEnabled: !previousState.switchEnabled }))
  }, []);

  return (
    <Profile {...formData} onAuthenticationToggle={onAuthenticationToggle} />
  )
}

export default ProfilePage;
