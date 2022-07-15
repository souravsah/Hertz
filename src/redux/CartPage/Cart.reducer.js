import { CART_DATA_FAILURE, CART_DATA_SUCCESS } from "./Cart.types";

const initialState={
    cartData:[],
    cartDataLoading:true
}

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case CART_DATA_SUCCESS:
            return {...state,cartData:payload,cartDataLoading:false}
        case CART_DATA_FAILURE:
            return {...state,cartData:null,cartDataLoading:false}
        default:
            return state;
}
}