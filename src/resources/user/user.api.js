import { apiClient } from 'services/api';

export const signIn = ({
  email,
  password,
}) => {
  return apiClient.post('/account/signin', {
    email,
    password,
  });
};

export const signUp = ({
  fullName,
  email,
  password,
}) => {
  return apiClient.post('/account/signup', {
    fullName,
    email,
    password,
  });
};

export const forgot = ({ email }) => {
  return apiClient.post('/account/forgot-password', { email });
};

export const reset = ({ password, token }) => {
  return apiClient.put('/account/reset-password', { password, token });
};

export const signOut = () => {
  return apiClient.post('/account/logout');
};

export const getCurrentUser = () => {
  return apiClient.get('/users/current');
};

export const updateCurrentUser = (data) => {
  return apiClient.put('/users/current', data);
};

export const changeUserPassword = (data) => {
  return apiClient.put('/users/change-password', data);
};

export const deleteGoogleOauth = () => {
  return apiClient.delete('/users/current/oauth/google');
};
