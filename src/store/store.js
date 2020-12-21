import {createStore} from 'redux';
import  reducer from './reducers/index'

// const reducer = combineReducers({...reducers});

export default createStore(reducer);