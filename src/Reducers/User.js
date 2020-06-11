import { ADD_USER, REMOVE_USER } from '../Constants';
const UserReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, { name: action.payload }];
        case REMOVE_USER:
            return state.filter((item, index)  => index !== action.index);
        default:
            return state;
    }
}

export default UserReducer;