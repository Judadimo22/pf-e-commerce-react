import {
  GET_BY_ID,
  GET_CLOTHES,
  CHANGE_FILTER_INPUT_BY_TYPE,
  CHANGE_FILTER_INPUT_BY_CATEGORIE,
  CHANGE_FILTER_INPUT_BY_TRADEMARK,
  FILTER_BY_CATEGORIE,
  FILTER_BY_TYPE,
  FILTER_BY_TRADEMARK,
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
  CACHIMBA
} from "../actions/index";

const initialState = {
  Clothes: [],
  ClothesCopy: [],
  Details: [],
  filterInputs: {
    byType: "",
    byCategorie: "",
    byTrademark: "",
  },
  allUsers: [],
  Users: [],
  UsersCopy: [],
  orders: [],
  user: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLOTHES:
      return {
        ...state,
        Clothes: action.payload,
        ClothesCopy: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        Users: action.payload,
        UsersCopy: action.payload,
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
      return {
        ...state,
        Details: action.payload,
      };
    case CHANGE_FILTER_INPUT_BY_TYPE:
      return {
        ...state,
        filterInputs: {
          ...state.filterInputs,
          byType: action.payload,
        },
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
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

    //---------------------------------------Filter by category-----------------------------------
    //---------------------------------------Filter by category-----------------------------------

    case FILTER_BY_CATEGORIE:
      let newArray = [];
      if (state.filterInputs.byCategorie === "") {
        if (state.filterInputs.byType.length) {
          newArray = state.Clothes.filter(
            (product) => product.type === state.filterInputs.byType
          );
          return {
            ...state,
            ClothesCopy: newArray.flat(),
          };
        } else {
          return {
            ...state,
            ClothesCopy: state.Clothes,
          };
        }
      }
      if (
        state.filterInputs.byCategorie.length &&
        state.filterInputs.byType.length
      ) {
        const filteredByCategorie = state.Clothes.filter(
          (product) => product.categorie === state.filterInputs.byCategorie
        );
        const lastArray = filteredByCategorie
          .flat()
          .filter((product) => product.type === state.filterInputs.byType);
        return {
          ...state,
          ClothesCopy: lastArray.flat(),
        };
      } else {
        const newerArray = state.Clothes.filter(
          (product) => product.categorie === state.filterInputs.byCategorie
        );
        return {
          ...state,
          ClothesCopy: newerArray.flat(),
        };
      }
    case FILTER_BY_CATEGORIE:
      let newArray = [];
      if (state.filterInputs.byCategorie === "") {
        if (state.filterInputs.byType.length) {
          newArray = state.Clothes.filter(
            (product) => product.type === state.filterInputs.byType
          );
          return {
            ...state,
            ClothesCopy: newArray.flat(),
          };
        } else {
          return {
            ...state,
            ClothesCopy: state.Clothes,
          };
        }
      }
      if (
        state.filterInputs.byCategorie.length &&
        state.filterInputs.byType.length
      ) {
        const filteredByCategorie = state.Clothes.filter(
          (product) => product.categorie === state.filterInputs.byCategorie
        );
        const lastArray = filteredByCategorie
          .flat()
          .filter((product) => product.type === state.filterInputs.byType);
        return {
          ...state,
          ClothesCopy: lastArray.flat(),
        };
      } else {
        const newerArray = state.Clothes.filter(
          (product) => product.categorie === state.filterInputs.byCategorie
        );
        return {
          ...state,
          ClothesCopy: newerArray.flat(),
        };
      }

    //---------------------------------------Filter by type---------------------------------
    //---------------------------------------Filter by type---------------------------------

    case FILTER_BY_TYPE:
      let array = [];
      if (state.filterInputs.byType === "") {
        if (state.filterInputs.byCategorie.length) {
          array = state.Clothes.filter(
            (product) => product.categorie === state.filterInputs.byCategorie
          );
          return {
            ...state,
            ClothesCopy: array.flat(),
          };
        } else {
          return {
            ...state,
            ClothesCopy: state.Clothes,
          };
        }
      }
      if (
        state.filterInputs.byType.length &&
        state.filterInputs.byCategorie.length
      ) {
        const filteredByCategorie = state.Clothes.filter(
          (product) => product.categorie === state.filterInputs.byCategorie
        );
        const lastArray = filteredByCategorie
          .flat()
          .filter((product) => product.type === state.filterInputs.byType);
        return {
          ...state,
          ClothesCopy: lastArray.flat(),
        };
      } else {
        const newerArray = state.Clothes.filter(
          (product) => product.type === state.filterInputs.byType
        );
        return {
          ...state,
          ClothesCopy: newerArray.flat(),
        };
      }
    case FILTER_BY_TYPE:
      let array = [];
      if (state.filterInputs.byType === "") {
        if (state.filterInputs.byCategorie.length) {
          array = state.Clothes.filter(
            (product) => product.categorie === state.filterInputs.byCategorie
          );
          return {
            ...state,
            ClothesCopy: array.flat(),
          };
        } else {
          return {
            ...state,
            ClothesCopy: state.Clothes,
          };
        }
      }
      if (
        state.filterInputs.byType.length &&
        state.filterInputs.byCategorie.length
      ) {
        const filteredByCategorie = state.Clothes.filter(
          (product) => product.categorie === state.filterInputs.byCategorie
        );
        const lastArray = filteredByCategorie
          .flat()
          .filter((product) => product.type === state.filterInputs.byType);
        return {
          ...state,
          ClothesCopy: lastArray.flat(),
        };
      } else {
        const newerArray = state.Clothes.filter(
          (product) => product.type === state.filterInputs.byType
        );
        return {
          ...state,
          ClothesCopy: newerArray.flat(),
        };
      }

    case FILTER_BY_TRADEMARK:
      let array2 = [];
      if (state.filterInputs.byTrademark === "") {
        if (state.filterInputs.byTrademark.length) {
          array2 = state.Clothes.filter(
            (product) => product.trademark === state.filterInputs.byTrademark
          );
          return {
            ...state,
            ClothesCopy: array.flat(),
          };
        } else {
          return {
            ...state,
            ClothesCopy: state.Clothes,
          };
        }
      }
      if (
        state.filterInputs.byTrademark.length &&
        state.filterInputs.byTrademark.length
      ) {
        const filteredByTrademark = state.Clothes.filter(
          (product) => product.trademark === state.filterInputs.byTrademark
        );
        const lastArray = filteredByTrademark
          .flat()
          .filter(
            (product) => product.trademark === state.filterInputs.byTrademark
          );
        return {
          ...state,
          ClothesCopy: lastArray.flat(),
        };
      } else {
        const newerArray = state.Clothes.filter(
          (product) => product.trademark === state.filterInputs.byTrademark
        );
        return {
          ...state,
          ClothesCopy: newerArray.flat(),
        };
      }

    case SORT_ASCENDING:
      return {
        ...state,
        ClothesCopy: state.ClothesCopy.slice().sort((a, b) => b.price - a.price),
      };

    case SORT_DESCENDING:
      return {
        ...state,
        ClothesCopy: state.ClothesCopy.slice().sort((a, b) => a.price - b.price),
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
    default: {
      return state;
    }
  }
}

export default rootReducer;

