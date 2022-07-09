// import { LOADING, LOGIN_FAILURE, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from "./authtypes";
import axios from "axios";
import { LOADING, LOAD_USER_FAILURE, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS , LOAD_USER_SUCCESS, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from "./authtypes";

const BASE_URL ='https://commerce3.herokuapp.com';


export const registerUser =({name,email,password,passwordConfirm}) => async (dispatch) =>{
    try 
    {
        dispatch({
            type:LOADING
        })
        let config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        let body =JSON.stringify({name,email,password,passwordConfirm})
        let response = await axios.post(`${BASE_URL}/api/v1/users/signup`,body,config)
        dispatch({
            type:SIGN_UP_SUCCESS,
            payload:response.data
        })
}
 catch (error) {
        dispatch({
            type:SIGN_UP_FAILURE
            
        })
    }
}

// export const loadUser = () => async(dispatch,getState) =>{
//     try {
//         let
        
//     } catch (error) {
        
//     }
// }

export const loginUser =({email,password}) => async (dispatch) =>{
    try 
    {
        dispatch({
            type:LOADING
        })
        let config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        let body =JSON.stringify({email,password})
        let response = await axios.post(`${BASE_URL}/api/v1/users/login`,body,config)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:response.data
        })
}
 catch (error) {
        dispatch({
            type:LOGIN_FAILURE            
        })
    }
}
export const loaduser = () => async(dispatch,getState) =>{
    try {
        let state = getState()
        let token = state.authReducer.token;

        dispatch({
            type:LOADING
        })

        dispatch({
            type:LOAD_USER_SUCCESS,
        payload:{
            token:token,
            data:{
                name:'sourav',
                email:'sourav@gmail.com'
            }
        }
        })
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAILURE
        })
    }
}
export const logout = () => async (dispatch) =>{
    try {
        dispatch({
            type:LOGOUT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type:LOGOUT_FAILURE
        })
    }
}


export const forgotPassword =({email}) => async (dispatch) =>{
    try 
    {
        dispatch({
            type:LOADING
        })
        let config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        let body =JSON.stringify({email})
        let response = await axios.post(`${BASE_URL}/api/v1/users/forgotPassword`,body,config)
        dispatch({
            type:FORGOT_PASSWORD_SUCCESS,
            payload:response.data
        })
}
 catch (error) {
        dispatch({
            type:FORGOT_PASSWORD_FAILURE
            
        })
    }
}
