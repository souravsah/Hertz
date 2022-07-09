import {combineReducers} from 'redux'
import HomePageReducer from './redux/HomePage/HomePage.reducer'
import authreducer from './redux/auth/authreducer'
export default combineReducers({
    HomePageReducer,
    authreducer
})