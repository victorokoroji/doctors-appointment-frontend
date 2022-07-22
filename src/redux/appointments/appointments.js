import userServices from '../services/userServices';

const FETCH_APPOINTMENTS = 'DOCTORS-APPOINTMENT/FETCH_APPOINTMENTS';
const CREATE_APPOINTMENTS = 'DOCTORS-APPOINTMENT/CREATE_APPOINTMENTS';
const DELETE_APPOINTMENTS = 'DOCTORS-APPOINTMENT/DELETE_APPOINTMENTS';

const initialState = [];

export const getAppointments = () => async (dispatch) => {
  const result = await userServices.getAllAppointments();
  return dispatch({
    type: FETCH_APPOINTMENTS,
    payload: result,
  });
};


