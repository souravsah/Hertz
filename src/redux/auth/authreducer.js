import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_SUCCESS, LOADING, LOAD_USER_FAILURE, LOAD_USER_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from "./authtypes";
const initialState = {
    id:null,
    token:localStorage.getItem('jwt'),
    user:null,
    loading:true,
    error:false
}
export default function(state=initialState,action){
    const {type,payload}=action;
    // console.log(payload);
    switch(type){
        case LOADING:
            return {...state,loading:true}
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
        case SIGN_UP_SUCCESS:
            localStorage.setItem("jwt",payload.token)
            return {...state,id:payload.data.user._id,token:payload.token,user:payload.data.user,loading:false};
        case SIGN_UP_FAILURE:
        case LOGIN_FAILURE:
        case LOAD_USER_FAILURE:
            localStorage.removeItem('jwt')
            return {
                ...state,
                error:true,
                loading:false,
                user:null
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('jwt')
            return{
                ...state,
                token:null,
                user:null,
                loading:false
            }
        case FORGOT_PASSWORD_SUCCESS:
        case FORGOT_PASSWORD_FAILURE:
        default:
            return state;
    }
}