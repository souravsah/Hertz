import { WISHLIST_DATA_FAILURE, WISHLIST_DATA_SUCCESS, WISHLIST_DELETE_SUCCESS, WISHLIST_POST_FAILURE, WISHLIST_POST_SUCCESS } from "./Wishlist.types";

const initialState={
    wishlistData:[],
    wishlistLoading:true,
    addtowishlistmsg:"",
    addtowishlistloading:true,
    deletemsg:"",
    deleleloading:true  
}
export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case WISHLIST_DATA_SUCCESS:
            return {...state,wishlistData:payload,wishlistLoading:false}
        case WISHLIST_DATA_FAILURE:
            return {...state,wishlistData:null,wishlistLoading:false}
        case WISHLIST_POST_SUCCESS:
            return {...state,addtowishlistloading:false,addtowishlistmsg:'Added to wishlist'}
        case WISHLIST_DELETE_SUCCESS:
            return {...state,deletemsg:"Successfully-deleted"}    
        default:
            return state;
    }
}
