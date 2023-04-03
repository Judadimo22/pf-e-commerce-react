import{
    GET_BY_ID,
    GET_CLOTHES,
    CHANGE_FILTER_INPUT_BY_TYPE,
    CHANGE_FILTER_INPUT_BY_CATEGORIE,
    CHANGE_FILTER_INPUT_BY_TRADEMARK,
    FILTER_BY_CATEGORIE,
    FILTER_BY_TYPE,
    FILTER_BY_TRADEMARK,
    SEARCH


} from '../actions/index'

const initialState = {
    Clothes: [],
    ClothesCopy: [],
    Details: [],
    filterInputs:{
        byType:"",
        byCategorie:"",
        byTrademark:""
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

            case SEARCH: {
                let search = [];
                search = state.Clothes?.filter((c) =>
                  c.name.toLowerCase().includes(action.payload.toLowerCase())
                );
                return {
                  ...state,
                  ClothesCopy: [...search],
                };
              }
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
        case CHANGE_FILTER_INPUT_BY_TRADEMARK:
            return{
                ...state,
                filterInputs:{
                    ...state.filterInputs,
                    byTrademark: action.payload
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

                case FILTER_BY_TRADEMARK:
                    let array2 = []
                    if(state.filterInputs.byTrademark === "") {
                        if(state.filterInputs.byTrademark.length){
                            array2 = state.Clothes.filter((product=>product.trademark === state.filterInputs.byTrademark))
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
                    if(state.filterInputs.byTrademark.length && state.filterInputs.byTrademark.length){
                        const filteredByTrademark = state.Clothes.filter(product=>product.trademark === state.filterInputs.byTrademark)
                        const lastArray= filteredByTrademark.flat().filter((product=>product.trademark === state.filterInputs.byTrademark))
                        return{
                            ...state,
                            ClothesCopy: lastArray.flat() 
                        }  
                    }else {
                        const newerArray = state.Clothes.filter(product=>product.trademark === state.filterInputs.byTrademark)
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