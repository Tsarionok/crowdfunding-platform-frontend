import React from 'react';
import { Avatar } from '@material-ui/core';
import {Toggle} from "react-toggle-component"
import Button from 'react-bootstrap/Button';
import './profile.scss';

function Profile({ fields, onSubmitForm, onChangeFields, onAuthenticationToggle }) {
  return (
    <div className="ProfilePage Center-Block">
      <div className="ProfilePage__MainInfo">
        <div>User Page</div>
        <Avatar className="ProfilePage__Avatar" />
        <Button variant="primary">Upload Image</Button>
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
              <input className="ProfilePage__Input" {...field} onChange={onChangeFields} />
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
    </div>
  )
}

export default Profile;
