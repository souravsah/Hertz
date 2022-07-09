import { FETCH_ADDDATA_FAILURE, FETCH_ADDDATA_SUCCESS } from "./HomePage.types";
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
