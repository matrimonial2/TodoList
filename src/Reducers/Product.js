import {GET_PRODUCTS, ADD_PRODUCTS} from '../Constants'


const ProductReducer = (state = [], action) => {
    switch(action.type){
        case GET_PRODUCTS:
            console.log("getState:", state);
            return state;
        case ADD_PRODUCTS:
            console.log("AddState:", state);
            return [...state, action.payload];
            default:
                return state;
    }
}

export default ProductReducer;