import { CART_DATA_FAILURE, CART_DATA_SUCCESS } from "./Cart.types";
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
        dispatch({
            type:CART_DATA_FAILURE
        })
    }
}
