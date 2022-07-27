import userServices from '../services/userServices';

const LOGIN_API = 'DOCTORS-APPOINTMENT/LOGIN_API';
const LOGOUT_API = 'DOCTORS-APPOINTMENT/LOGOUT_API';

export const IS_LOGIN = 'DOCTORS-APPOINTMENT/IS_LOGIN';

const initialState = {
  isLoggedIn: false,
  user: {},
  status: '',
};

