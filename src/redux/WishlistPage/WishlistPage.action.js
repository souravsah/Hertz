import { WISHLIST_DATA_FAILURE, WISHLIST_DATA_SUCCESS, WISHLIST_DELETE_FAILURE, WISHLIST_DELETE_SUCCESS, WISHLIST_POST_FAILURE, WISHLIST_POST_SUCCESS } from "./Wishlist.types";
import axios from "axios";
import jwt_decode from 'jwt-decode'
const BASE_URL ='https://commerce3.herokuapp.com';

export const getWishlistdata = () => async (dispatch) =>
{
    try {
        let decoded = jwt_decode(localStorage.getItem('jwt'));
        console.log(decoded);

        const data = await axios.get(`${BASE_URL}/api/v1/wishlist?userId=${decoded.id}`,{
            'headers':{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        console.log(data);
        dispatch({
            type:WISHLIST_DATA_SUCCESS,
            payload:data.data.data
        })
    } catch (error) {
        dispatch({
            type:WISHLIST_DATA_FAILURE
        })
    }
}


export const addtocart = ({productId}) => async (dispatch) =>
{
    try {


        const data = await axios.post(`${BASE_URL}/api/v1/wishlist`,{productId},{
            'headers':{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        console.log(data);
        dispatch({
            type:WISHLIST_POST_SUCCESS,
            // payload:data.data.data
        })
    } catch (error) {
        dispatch({
            type:WISHLIST_POST_FAILURE
        })
    }
}

export const deleteWishlistdata = (id) => async (dispatch) =>
{
    try {
        

        const data = await axios.delete(`${BASE_URL}/api/v1/wishlist/${id}`,{
            'headers':{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        console.log(data);
        dispatch({
            type:WISHLIST_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:WISHLIST_DELETE_FAILURE
        })
    }
}