import { createStore } from 'redux';

const initialState = {
  name: '',
  password: '',
  isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload
      };
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        password: action.payload
      };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

const store = createStore(loginReducer);

export default store;
