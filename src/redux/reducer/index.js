import websitereducer from './websitereducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	WebsiteReducer: websitereducer,
});

export default rootReducer;
