import api from './api';
import { User } from '../types/user';

export const tokenKey = 'token';

/**
 * Function used to check if user is logged in or not
 */
const isUserLogged = () => {
  return localStorage.getItem(tokenKey) === null ? false : true;
};

/**
 * Function used to get the logged in user's informations
 */
const getCurrentUser = async () => {
    const user = await api.get(`/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
      },
    });
    return user;
};

/**
 * Returns profile of someone by its username
 * @returns Someone's user profile
 */
const getProfileByUsername = async (username: string ) => {
  const user = await api.get(`/users/profile/${username}`);
  return user;
};

/**
 * Checks if user is admin or normal member
 */
const isUserAdmin = async () => {
  const response = await api.get(`/authadmin`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    },
  });
  return response;
};

/**
 * Clears the token from user's storage
 */
const clearToken = async () => {
  localStorage.removeItem(tokenKey);
};

/**
 * Method triggered when we login
 * @param {string} email User's email
 * @param {string} password User's password
 */
const login = async (email: string, password: string) => {
  const response = await api
    .post('/login', {
      uid: email,
      password: password,
    })
    .catch(() => {
      clearToken();
      throw 'Usuário não autorizado';
    });
  return response;
};

/**
 * Triggered when we're logging out
 */
 const logout = async () => {
  const response = await api
    .post('/login', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
      },
    }).then(() => {
      clearToken();
    })
    .catch(() => {
      throw 'Erro na API';
    });
  return response;
};

/**
 * Registers an user
 */
const registerUser = async (data: User) => {
  const response = await api
    .post('/users', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
      }
    }).catch((response) => {
      throw response;
    })
    return response;
}

export default {
  login,
  clearToken,
  logout,
  getCurrentUser,
  getProfileByUsername,
  isUserLogged,
  isUserAdmin,
  registerUser
};
