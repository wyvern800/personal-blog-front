import api from './api';

const tokenKey = 'token';

/**
 * Método usado para checagem se usuário está logado
 * @returns Retorna true se usuário está logado, e false se estiver deslogado
 */
const isUserLogged = () => {
  return localStorage.getItem(tokenKey) === null ? false : true;
};

/**
 * Método usado para obter informaçõoes do usuário autenticado
 * @returns Retorna informações do usuário autenticado atualmente
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
 * Checa se usuário é admin
 */
const isUserAdmin = async () => {
  const response = await api.get(`/auth/admin`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    },
  });
  return response;
};

/**
 * Método responsável por deslogar o usuário da plataforma
 */
const clearToken = async () => {
  localStorage.removeItem(tokenKey);
};

/**
 * Método responsável por logar na plataforma
 * @param {string} email O email do cliente
 * @param {string} password Senha do cliente
 * @returns Retorna true se login foi OK, senão retorna um erro
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
 * Método responsável por deslogar na plataforma
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

export default {
  login,
  clearToken,
  logout,
  getCurrentUser,
  isUserLogged,
  isUserAdmin
};
