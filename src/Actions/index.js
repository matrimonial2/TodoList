import { INCREMENT, DECREMENT, RESET, ADD_USER, REMOVE_USER, GET_PRODUCTS, ADD_PRODUCTS } from '../Constants';

export const getProduct = () => {
    return {
        type: GET_PRODUCTS
    }
}

export const addProduct = (data) => {
    console.log("Actiondata: ", data);
    return {
        type: ADD_PRODUCTS,
        payload: {
            name: data.name,
            email: data.email,
            company: data.company
        }
    }
}

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const addUser = (data) => {
    return {
    type: ADD_USER,
    payload: data
    }
}

export const removeUser = (index) => {
    return {
        type: REMOVE_USER,
        index
    }
}