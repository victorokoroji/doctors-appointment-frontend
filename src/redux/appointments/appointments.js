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

// eslint-disable-next-line consistent-return
export const createAppointment = (appointment, user_id) => async (dispatch) => {
  const result = await userServices.addAppointment(appointment, user_id);
  if (result.status === 200) {
    return dispatch({
      type: CREATE_APPOINTMENTS,
      payload: {
        id: appointment.id,
        name: appointment.name,
        city: appointment.city,
        date: appointment.date,
      },
    });
  }
};

export const deleteAppointment = (user_id, id) => async (dispatch) => {
  await userServices.deleteAppointment(user_id, id);
  return dispatch({
    type: DELETE_APPOINTMENTS,
    payload: { user_id, id },
  });
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      return { appointments: [...action.payload] };
    case CREATE_APPOINTMENTS:
      return { ...state, appointments: action.payload };
    case DELETE_APPOINTMENTS:
      return {
        ...state,
        appointments: [
          ...state.appointments.filter((appointment) => appointment !== action.id),
        ],
      };
    default:
      return state;
  }
};

export default appointmentReducer;
