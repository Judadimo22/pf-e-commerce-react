import{
    GET_BY_ID,
    GET_CLOTHES
} from '../actions/index'

const initialState = {
    Clothes: [],
    ClothesCopy: [],
    Details: []
};

function rootReducer(state= initialState, action){
    switch(action.type){
        case GET_CLOTHES:
            return{
                ...state,
                Clothes: action.payload,
                ClothesCopy: action.payload,
            };
        case GET_BY_ID:
            return{
                ...state,
                Details: action.payload

            }
        default: {
            return state;
        }
    }
};

export default rootReducer;