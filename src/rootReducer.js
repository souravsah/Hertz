import {combineReducers} from 'redux'
import HomePageReducer from './redux/HomePage/HomePage.reducer'
import authreducer from './redux/auth/authreducer'
import WishlistReducer from './redux/WishlistPage/Wishlist.reducer'
export default combineReducers({
    HomePageReducer,
    authreducer,
    WishlistReducer
})