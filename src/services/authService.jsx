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
  try {
    const user = await axios.get('/users/3', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
      },
    });
    return user.data;
  } catch (error) {
    return null;
  }
};

/**
 * Método responsável por deslogar o usuário da plataforma
 */
const logout = async () => {
  localStorage.removeItem(tokenKey);
};

/**
 * Método responsável por logar na plataforma
 * @param {string} email O email do cliente
 * @param {string} password Senha do cliente
 * @returns Retorna true se login foi OK, senão retorna um erro
 */
const login = async (email, password) => {
  const data = {
    uid: email,
    password: password,
  };

  await api
    .post('/login', data)
    .then((response) => {
      localStorage.setItem(tokenKey, response?.data?.token);
    })
    .catch(() => {
      logout();
      throw 'Usuário não autorizado';
    });
  return true;
};

export default {
  logout,
  login,
  getCurrentUser,
  isUserLogged,
};
