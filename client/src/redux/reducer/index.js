import { GET_CLOTHES } from "../actions";

const initialState = {
    Clothes: [],
    ClothesCopy: []
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_CLOTHES:
            return{
                ...state,
                Clothes: action.payload,
                ClothesCopy: action.payload,
            };
        default: {
            return state;
        }
    }
};

export default rootReducer;