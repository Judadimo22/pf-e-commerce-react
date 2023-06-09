import {
  GET_BY_ID,
  GET_CLOTHES,
  CHANGE_FILTER_INPUT_BY_TYPE,
  CHANGE_FILTER_INPUT_BY_CATEGORIE,
  CHANGE_FILTER_INPUT_BY_TRADEMARK,
  FILTER,
  SEARCH,
  UPDATE_CLOTH,
  POST_CLOTH,
  PUT_USERS,
  POST_USERS,
  GET_USERS,
  GET_ORDERS,
  GET_USER_BY_ID,
  SORT_ASCENDING,
  SORT_DESCENDING,
  CACHIMBA,
  CLEAR_FILTERS,
  CHANGE_INDEX,
  SEARCH_USER,
  INFO_USER_BY_ID,
  UPDATE_USER,
  IS_SEARCH_INPUT,
  CART_LENGTH,
  GET_CLOTHES_ADMIN,
  SEARCH_ADMIN
} from "../actions/index";

const computeFilteredData = (
  products,
  categoryFilter,
  typeFilter,
  trademarkFilter
) =>
  products.filter(
    (product) =>
      (!categoryFilter || product.categorie === categoryFilter) &&
      (!typeFilter || product.type === typeFilter) &&
      (!trademarkFilter || product.trademark === trademarkFilter)
  );

const initialState = {
  Clothes: [],
  ClothesCopy: [],
  ClothesAdmin : [],
  ClothesAdminCopy: [],
  Details: [],
  filterInputs: {
    byType: "",
    byCategorie: "",
    byTrademark: "",
  },
  filterIndex: {
    byType: -1,
    byCategorie: -1,
    byTrademark: -1,
  },
  allUsers: [],
  Users: [],
  UsersCopy: [],
  orders: [],
  user: {},
  DetailUser: [],
  searchInput: "",
  searchResults: 0,
  cartLength:0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CART_LENGTH:
      return {
        ...state,
        cartLength: action.payload,
      };
    case GET_CLOTHES:
      const valid = action.payload.filter(product => product.active == 'valid')
      return {
        ...state,
        Clothes: valid,
        ClothesCopy: valid,
      };
    case GET_CLOTHES_ADMIN:
      return {
        ...state,
        ClothesAdmin: action.payload,
        ClothesAdminCopy: action.payload,
      };
    case IS_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload,
      };
    case INFO_USER_BY_ID:
      return {
        ...state,
        DetailUser: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        Users: action.payload,
        UsersCopy: action.payload,
      };

    case SEARCH: {
      if(!state.searchInput.length) {
        return {
          ...state,
          ClothesCopy: state.Clothes
        };
      }else{
        let search = state.Clothes?.filter((c) =>
          c.name.toLowerCase().includes(state.searchInput.toLowerCase())
        );
        return {
          ...state,
          searchResults: search.length,
          ClothesCopy: [...search],
        };
      }
    }
    case SEARCH_USER: {
      let search = [];
      search = state.Users?.filter((c) =>
        c.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        UsersCopy: [...search],
      };
    }
    case GET_BY_ID:
      return {
        ...state,
        Details: action.payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    //--------------------------------------------------Filters------------------------------------------------

    case CHANGE_INDEX:
      if (action.payload[0] == "type") {
        return {
          ...state,
          filterIndex: {
            ...state.filterIndex,
            byType: action.payload[1],
          },
        };
      }
      if (action.payload[0] == "category") {
        return {
          ...state,
          filterIndex: {
            ...state.filterIndex,
            byCategorie: action.payload[1],
          },
        };
      }
      if (action.payload[0] == "trademark") {
        return {
          ...state,
          filterIndex: {
            ...state.filterIndex,
            byTrademark: action.payload[1],
          },
        };
      }
      if (action.payload[0] == "all") {
        return {
          ...state,
          filterIndex: {
            byType: action.payload[1],
            byCategorie: action.payload[1],
            byTrademark: action.payload[1],
          },
        };
      }

    case FILTER:
      if (state.searchInput.length) {
        let search = [];
      search = state.Clothes?.filter((c) =>
        c.name.toLowerCase().includes(state.searchInput.toLowerCase())
      );
        return {
          ...state,
          ClothesCopy: computeFilteredData(
            search,
            state.filterInputs.byCategorie,
            state.filterInputs.byType,
            state.filterInputs.byTrademark
          ),
        };
      }
      return {
        ...state,
        ClothesCopy: computeFilteredData(
          state.Clothes,
          state.filterInputs.byCategorie,
          state.filterInputs.byType,
          state.filterInputs.byTrademark
        ),
      };
    case CHANGE_FILTER_INPUT_BY_TYPE:
      return {
        ...state,
        filterInputs: {
          ...state.filterInputs,
          byType: action.payload,
        },
      };
    case CHANGE_FILTER_INPUT_BY_CATEGORIE:
      return {
        ...state,
        filterInputs: {
          ...state.filterInputs,
          byCategorie: action.payload,
        },
      };
    case CHANGE_FILTER_INPUT_BY_TRADEMARK:
      return {
        ...state,
        filterInputs: {
          ...state.filterInputs,
          byTrademark: action.payload,
        },
      };

    //---------------------------------------------------------------------------------------------------------------

    case SORT_ASCENDING:
      return {
        ...state,
        ClothesCopy: state.ClothesCopy.slice().sort(
          (a, b) => b.price - a.price
        ),
      };

    case SORT_DESCENDING:
      return {
        ...state,
        ClothesCopy: state.ClothesCopy.slice().sort(
          (a, b) => a.price - b.price
        ),
      };

    case UPDATE_CLOTH:
      return {
        ...state,
      };

    case POST_CLOTH:
      return {
        ...state,
        Clothes: action.payload,
        ClothesCopy: action.payload,
        ClothesAdmin: action.payload,
        ClothesAdminCopy: action.payload
      };
    case PUT_USERS:
      return {
        ...state,
        // allUsers: action.action.payload
      };
    case POST_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case CLEAR_FILTERS:
      if (action.payload == "trademark") {
        return {
          ...state,
          filterInputs: {
            ...state.filterInputs,
            byTrademark: "",
          },
        };
      }
      if (action.payload == "category") {
        return {
          ...state,
          filterInputs: {
            ...state.filterInputs,
            byCategorie: "",
          },
        };
      }
      if (action.payload == "type") {
        return {
          ...state,
          filterInputs: {
            ...state.filterInputs,
            byType: "",
          },
        };
      }
      if (action.payload == "all") {
        return {
          ...state,
          filterInputs: {
            byType: "",
            byCategorie: "",
            byTrademark: "",
          },
        };
      }

    default: {
      return state;
    }
  }
}

export default rootReducer;
