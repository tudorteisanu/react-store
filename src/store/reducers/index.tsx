import { combineReducers } from 'redux';
import layoutReducers from './layout'

const allReducers = combineReducers({
    layout: layoutReducers
});


export default allReducers;