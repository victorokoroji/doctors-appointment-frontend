import userServices from '../services/userServices';

const FETCH_DOCTORS = 'DOCTORS-APPOINTMENT/FETCH_DOCTORS';
const CREATE_DOCTORS = 'DOCTORS-APPOINTMENT/CREATE_DOCTORS';
const DELETE_DOCTORS = 'DOCTORS-APPOINTMENT/DELETE_DOCTORS';

const initialState = { doctors: [] };

export const getDoctors = () => async (dispatch) => {
  const result = await userServices.getDoctors();
  return dispatch({
    type: FETCH_DOCTORS,
    payload: result,
  });
};
