import { CART_DATA_FAILURE, CART_DATA_SUCCESS, CART_DELETE_FAILURE, CART_DELETE_SUCCESS, CART_POST_SUCCESS } from "./Cart.types";

const initialState={
    cartData:[],
    cartDataLoading:true,
    cartdeletemsg:"",
    cartdeleteloading:true,
    addtowishlistmsg:"",
    addtowishlistloading:true,
}

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case CART_DATA_SUCCESS:
            return {...state,cartData:payload,cartDataLoading:false}
        case CART_DATA_FAILURE:
            return {...state,cartData:null,cartDataLoading:false}
        case CART_DELETE_SUCCESS:
            return {...state,cartdeletemsg:"Delete Successfull",cartdeleteloading:false}
        case CART_DELETE_FAILURE:
            return {...state,cartdeletemsg:"",cartdeleteloading:false}    
        case CART_POST_SUCCESS:
            return {...state,addtowishlistloading:false,addtowishlistmsg:'Added to wishlist'}
        default:
            return state;
}
}