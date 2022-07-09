import { FETCH_ADDDATA_FAILURE, FETCH_ADDDATA_SUCCESS } from "./HomePage.types";

const initialState={
    addData:[],
    addLoading:true
}
export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case FETCH_ADDDATA_SUCCESS:
            return {...state,addData:payload,addLoading:false}
        case FETCH_ADDDATA_FAILURE:
            return {...state,addData:[],addLoading:false}    
        default:
            return state;
    }
}