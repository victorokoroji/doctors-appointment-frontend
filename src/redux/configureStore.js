import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from './doctors/doctors';
import appointmentReducer from './appointments/appointments';

const rootReducer = combineReducers({
  doctorsReducer,
  appointmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
