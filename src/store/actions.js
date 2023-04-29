export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export const LOGIN = 'LOGIN';

export const login = (name, password) => ({
  type: LOGIN,
  payload: {
    name,
    password,
  },
});
