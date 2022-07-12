import { FETCH_ADDDATA_FAILURE, FETCH_ADDDATA_SUCCESS, FETCH_NEWARRIVAL_DATA_FAILURE, FETCH_NEWARRIVAL_DATA_SUCCESS ,FETCH_TOPSELLER_DATA_SUCCESS,FETCH_TOPSELLER_DATA_FAILURE } from "./HomePage.types";
const initialState={
    addData:[],
    addLoading:true,
    newarrivalData:[],
    newarrivalLoading:true,
    topsellersData:[],
    topsellersDataLoading:true
}
export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case FETCH_ADDDATA_SUCCESS:
            return {...state,addData:payload,addLoading:false}
        case FETCH_ADDDATA_FAILURE:
            return {...state,addData:[],addLoading:false}    
        case FETCH_NEWARRIVAL_DATA_SUCCESS:
            return {...state,newarrivalData:payload,newarrivalLoading:false}
        case FETCH_NEWARRIVAL_DATA_FAILURE:
            return {...state,newarrivalData:[],newarrivalLoading:false}
        case FETCH_TOPSELLER_DATA_SUCCESS:
            return {...state,topsellersData:payload,topsellersDataLoading:false}
        case FETCH_TOPSELLER_DATA_FAILURE:
            return {...state,topsellersData:[],topsellersDataLoading:false}
        default:
            return state;
    }
}