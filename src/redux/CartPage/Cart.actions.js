import { CART_DATA_FAILURE, CART_DATA_SUCCESS, CART_DELETE_FAILURE, CART_DELETE_SUCCESS, CART_POST_FAILURE, CART_POST_SUCCESS } from "./Cart.types";
import axios from "axios";
import jwt_decode from 'jwt-decode'
const BASE_URL ='https://commerce3.herokuapp.com';
export const getCartdata = () => async (dispatch) =>
{
    try {
        let decoded = jwt_decode(localStorage.getItem('jwt'));
        console.log(decoded);

        const data = await axios.get(`${BASE_URL}/api/v1/cart?userId=${decoded.id}`,{
            'headers':{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        console.log(data);
        dispatch({
            type:CART_DATA_SUCCESS,
            payload:data.data.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type:CART_DATA_FAILURE
            
        })
    }
}


export const addtocart = ({productId}) => async (dispatch) =>
{
    try {


        const data = await axios.post(`${BASE_URL}/api/v1/cart`,{productId},{
            'headers':{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        console.log(data);
        dispatch({
            type:CART_POST_SUCCESS,
            // payload:data.data.data
        })
    } catch (error) {
        dispatch({
            type:CART_POST_FAILURE
        })
    }
}


export const deletecartdata = (id) => async (dispatch) =>
{
    try {
        

        const data = await axios.delete(`${BASE_URL}/api/v1/cart/${id}`,{
            'headers':{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        console.log(data);
        dispatch({
            type:CART_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:CART_DELETE_FAILURE
        })
    }
}