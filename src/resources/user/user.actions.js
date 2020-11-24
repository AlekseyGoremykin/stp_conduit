import history from 'services/history.service';

import { routes } from 'routes';

import * as api from './user.api';

export const signIn = ({
  email,
  password,
}) => async (dispatch) => {
  const user = await api.signIn({
    email,
    password,
  });
  dispatch({ type: 'user:set', payload: { user } });

  const searchParams = new URLSearchParams(window.location.search);
  history.push(searchParams.get('to') || routes.applications.path);
};

export const signUp = ({
  fullName,
  email,
  password,
}) => async (dispatch) => {
  const user = await api.signUp({
    fullName,
    email,
    password,
  });
  dispatch({ type: 'user:set', payload: { user } });
};

export const forgot = ({ email }) => async () => {
  await api.forgot({ email });
};

export const reset = ({ password, token }) => async () => {
  await api.reset({ password, token });
};

export const signOut = () => async (dispatch) => {
  await api.signOut();
  dispatch({ type: 'user:delete' });
};

export const getCurrentUser = () => async (dispatch) => {
  const user = await api.getCurrentUser();
  dispatch({ type: 'user:set', payload: { user } });
};

export const updateCurrentUser = (data) => async (dispatch) => {
  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('fullName', data.fullName);
  formData.append('notifications', data.notifications);
  formData.append('isUserImageDeleted', data.isUserImageDeleted);
  if (data.avatar) {
    formData.append('avatar', data.avatar);
  }
  const user = await api.updateCurrentUser(formData);
  dispatch({ type: 'user:set', payload: { user } });
};

export const changeUserPassword = (data) => async () => {
  return api.changeUserPassword(data);
};

export const deleteGoogleOauth = () => async (dispatch) => {
  const user = await api.deleteGoogleOauth();
  dispatch({ type: 'user:set', payload: { user } });
};
