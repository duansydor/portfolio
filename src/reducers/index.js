import { projectReducer } from './projectReducer';
import { calculatorReducer } from './calculatorReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
	projectState: projectReducer,
	calcState: calculatorReducer
});