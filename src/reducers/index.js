import { projectReducer } from './projectReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
	projectState: projectReducer
});