import axios from 'axios';
import jwt from 'jsonwebtoken';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    const { role, email } = jwt.decode(token.includes('Bearer') ? token.slice(7): token, { complete: true }).payload;
    return { role, email };
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const configContentType = (ContentTypeValue = 'application/json') => {
  return {
    headers: {
      'Content-Type': ContentTypeValue,
    },
  };
};