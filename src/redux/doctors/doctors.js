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

export const createDoctor = (doctor, user_id) => async (dispatch) => {
  const result = await userServices.addDoctor(doctor, user_id);
  if (result.status === 200) {
    return dispatch({
      type: CREATE_DOCTORS,
      payload: {
        id: doctor.id,
        name: doctor.name,
        specialization: doctor.specialization,
        charges: doctor.charges,
      },
    });
  }
  return dispatch({
    type: 'default',
  });
};

export const deleteDoctor = (user_id, id) => async (dispatch) => {
  await userServices.deleteDoctor(user_id, id);
  return dispatch({
    type: DELETE_DOCTORS,
    payload: { user_id, id },
  });
};

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return { ...state, doctors: [...action.payload] };
    case CREATE_DOCTORS:
      return { ...state, doctors: action.payload };
    case DELETE_DOCTORS:
      return {
        ...state,
        doctors: [
          ...state.doctors.filter((doctor) => doctor.doctor !== action.id),
        ],
      };
    default:
      return state;
  }
};

export default doctorsReducer;
