import React from 'react';
import { Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {Toggle} from "react-toggle-component"
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit';
import './profile.scss';

function Profile({
  currentUser, 
  fields, 
  onSubmitForm, 
  onChangeFields, 
  onAuthenticationToggle, 
  onDeleteUser,
  onFieldChange,
  changingPassword,
  onChangePassword,
  oldPassword,
  newPassword,
  setChangingPassword
}) {
  return (
    <div className="ProfilePage Center-Block">
      { changingPassword ? (
        <React.Fragment>
          <h5>Change password</h5>
          <label>Old password: </label>
          <input type="password" name="oldPassword" value={oldPassword} onChange={onFieldChange} />
          <label>New password: </label>
          <input type="password" name="newPassword" value={newPassword} onChange={onFieldChange}/>
          <div className="ProfilePage__ChangePasswordButtons">
            <Button variant="primary" onClick={onChangePassword}>Change Password</Button>
            <Button variant="primary" onClick={() => setChangingPassword(false)}>Back to profile</Button>
          </div>
        </React.Fragment>
      ): (
        <React.Fragment>
          <div className="ProfilePage__MainInfo">
            <div>User Page</div>
            <div>Change Password <EditIcon onClick={() => setChangingPassword(true)} /></div>
            <Avatar className="ProfilePage__Avatar" />
              <Button variant="primary" style={{ marginRight: '10px' }}>Upload Image</Button>
              <DeleteIcon className="ProfilePage__Delete-Button" onClick={onDeleteUser} />
            <div>
              <Toggle 
                name="toggle-1"
                leftBackgroundColor="tomato"
                rightBackgroundColor="green"
                borderColor="black"
                knobColor="white"
                onToggle={onAuthenticationToggle}
              />
            <span>Two factor authentication</span>
          </div>
          <div className="ProfilePage__Form">
            { fields && fields.map((field) => (
              <div className="ProfilePage__InputWrapper" key={field.key}>
                <input className="ProfilePage__Input" {...field} value={
                  (currentUser && currentUser[field.name]) ? currentUser[field.name]: ''
                  } onChange={onChangeFields} />
              </div>
            )) }
            <div className="Center-Block">
              <label>
                Sex:&nbsp; 
                <select name="Sex">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Country:&nbsp; 
                <select name="Country" onChange={null}>
                  <option value="Belarus">Belarus</option>
                  <option value="Russia">Russia</option>
                </select>
              </label>
              <span />
              <label>
                City:&nbsp; 
                <select name="City">
                  <option value="Minsk">Minsk</option>
                  <option value="Grodno">Grodno</option>
                </select>
              </label>
            </div>
          </div>
          <Button variant="secondary" size="lg" active onClick={onSubmitForm}>
            Submit
          </Button>
        </div>
        </React.Fragment>
      ) }
    </div>
  )
}

export default Profile;
