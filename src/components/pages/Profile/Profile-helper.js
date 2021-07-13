import { v4 as uuidv4 } from 'uuid';

export const ProfileFormData = [
  {
    placeholder: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    placeholder: 'Firstname',
    name: 'firstname',
    type: 'text'
  },
  {
    placeholder: 'Lastname',
    name: 'lastname',
    type: 'text',
  },
  {
    placeholder: 'Phone',
    name: 'phone',
    type: 'tel'
  }
].map((inputInfo) => ({ ...inputInfo, key: uuidv4() }))