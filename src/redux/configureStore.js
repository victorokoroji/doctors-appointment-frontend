import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ 
    doctorsReducer,
    appointmentReducer
 });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
