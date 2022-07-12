import { FETCH_ADDDATA_FAILURE, FETCH_ADDDATA_SUCCESS, FETCH_NEWARRIVAL_DATA_FAILURE, FETCH_NEWARRIVAL_DATA_SUCCESS ,FETCH_TOPSELLER_DATA_SUCCESS,FETCH_TOPSELLER_DATA_FAILURE } from "./HomePage.types";
import axios from 'axios'

const BASE_URL ='https://commerce3.herokuapp.com';

export const getAdddata = () => async (dispatch) =>{
    try {
        const data = await axios.get(`${BASE_URL}/api/v1/navad`)
        console.log(data);
        dispatch({
            type:FETCH_ADDDATA_SUCCESS,
            payload:data.data.data
        })
    } catch (error) {
        dispatch({
            type:FETCH_ADDDATA_FAILURE
        })
    }
}

export const getNewArrivalsProducts = () => async (dispatch) =>{
    try {
        const data = await axios.get(`${BASE_URL}/api/v1/product?pNewArrival=true`)
        console.log(data);
        dispatch({
            type:FETCH_NEWARRIVAL_DATA_SUCCESS,
            payload:data.data.data
        })
    } catch (error) {
        dispatch({
            type:FETCH_NEWARRIVAL_DATA_FAILURE
        })
    }
}

export const getTopSellersProducts = () => async (dispatch) =>{
    try {
        const data = await axios.get(`${BASE_URL}/api/v1/product?pTopSellers=true`)
        console.log(data);
        dispatch({
            type:FETCH_TOPSELLER_DATA_SUCCESS,
            payload:data.data.data
        })
    } catch (error) {
        dispatch({
            type:FETCH_TOPSELLER_DATA_FAILURE
        })
    }
}

