import apartments from './apartmentsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	apartments
});

export default rootReducer;