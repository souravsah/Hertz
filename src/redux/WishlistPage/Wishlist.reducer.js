import { WISHLIST_DATA_FAILURE, WISHLIST_DATA_SUCCESS } from "./Wishlist.types";

const initialState={
    wishlistData:[],
    wishlistLoading:true
}

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case WISHLIST_DATA_SUCCESS:
            return {...state,wishlistData:payload,wishlistLoading:false}
        case WISHLIST_DATA_FAILURE:
            return {...state,wishlistData:null,wishlistLoading:false}
        default:
            return state;
    }
}