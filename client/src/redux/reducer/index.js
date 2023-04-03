import{
    GET_BY_ID,
    GET_CLOTHES,
    CHANGE_FILTER_INPUT_BY_TYPE,
    CHANGE_FILTER_INPUT_BY_CATEGORIE,
    FILTER_BY_CATEGORIE,
    FILTER_BY_TYPE,

} from '../actions/index'

const initialState = {
    Clothes: [],
    ClothesCopy: [],
    Details: [],
    filterInputs:{
        byType:"",
        byCategorie:""
    }
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
        case CHANGE_FILTER_INPUT_BY_TYPE:
            return{
                ...state,
                filterInputs:{
                    ...state.filterInputs,
                    byType: action.payload
                }
            }
        case CHANGE_FILTER_INPUT_BY_CATEGORIE:
            return{
                ...state,
                filterInputs:{
                    ...state.filterInputs,
                    byCategorie: action.payload
                }
            }


//---------------------------------------Filter by category-----------------------------------

        case FILTER_BY_CATEGORIE:
            let newArray = []
            if(state.filterInputs.byCategorie === "") {
                if(state.filterInputs.byType.length){
                    newArray = state.Clothes.filter((product=>product.type === state.filterInputs.byType))
                    return{
                        ...state,
                        ClothesCopy: newArray.flat()  
                    }
                } else{
                    return{
                        ...state,
                        ClothesCopy: state.Clothes  
                    }
                }
            }
            if(state.filterInputs.byCategorie.length && state.filterInputs.byType.length){
                const filteredByCategorie = state.Clothes.filter(product=>product.categorie === state.filterInputs.byCategorie)
                const lastArray= filteredByCategorie.flat().filter((product=>product.type === state.filterInputs.byType))
                return{
                    ...state,
                    ClothesCopy: lastArray.flat() 
                }  
            }else {
                const newerArray = state.Clothes.filter(product=>product.categorie === state.filterInputs.byCategorie)
                return{
                    ...state,
                    ClothesCopy: newerArray.flat() 
                }
            }

//---------------------------------------Filter by type---------------------------------

            case FILTER_BY_TYPE:
                let array = []
                if(state.filterInputs.byType === "") {
                    if(state.filterInputs.byCategorie.length){
                        array = state.Clothes.filter((product=>product.categorie === state.filterInputs.byCategorie))
                        return{
                            ...state,
                            ClothesCopy: array.flat()
                        }
                    }else{
                        return{
                            ...state,
                            ClothesCopy: state.Clothes 
                        }
                    }
                }
                if(state.filterInputs.byType.length && state.filterInputs.byCategorie.length){
                    const filteredByCategorie = state.Clothes.filter(product=>product.categorie === state.filterInputs.byCategorie)
                    const lastArray= filteredByCategorie.flat().filter((product=>product.type === state.filterInputs.byType))
                    return{
                        ...state,
                        ClothesCopy: lastArray.flat() 
                    }  
                }else {
                    const newerArray = state.Clothes.filter(product=>product.type === state.filterInputs.byType)
                    return{
                        ...state,
                        ClothesCopy: newerArray.flat() 
                    }
                }
        default: {
            return state;
        }
    }
};

export default rootReducer;