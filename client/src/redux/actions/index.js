import axios from 'axios';
export const GET_CLOTHES = 'GET_CLOTHES';
export const GET_CLOTH = 'GET_CLOTH';
export const GET_BY_ID = 'GET_BY_ID';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_BY_CATEGORIE = 'FILTER_BY_CATEGORIE';
export const FILTER_BY_TRADEMARK = 'FILTER_BY_TRADEMARK';
export const CHANGE_FILTER_INPUT_BY_TYPE = 'CHANGE_FILTER_INPUT_BY_TYPE';
export const CHANGE_FILTER_INPUT_BY_CATEGORIE = 'CHANGE_FILTER_INPUT_BY_CATEGORIE';
export const CHANGE_FILTER_INPUT_BY_TRADEMARK = 'CHANGE_FILTER_INPUT_BY_TRADEMARK';
export const SEARCH = 'SEARCH'

export function getClothes(){
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/cloth`);
        dispatch({
          type: GET_CLOTHES,
          payload: json.data,
        });
      }
}

export function getCloth(name) {
  console.log(name)
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/cloth?name=${name}`);
        dispatch({
          type: GET_CLOTHES,
          payload: json.data,
        });
      };

}

export const setSearch = (payload) => {
  return {
    type: SEARCH,
    payload,
  };
};

//-----------------------------------Change Input----------------------------------
export function ChangefilterInputByType(fliter) {
    return async function (dispatch) {
        dispatch({
          type: CHANGE_FILTER_INPUT_BY_TYPE,
          payload:fliter
        });
      };
}
export function ChangefilterInputByCategorie(fliter) {
    return async function (dispatch) {
        dispatch({
          type: CHANGE_FILTER_INPUT_BY_CATEGORIE,
          payload:fliter
        });
      };
}

export function ChangeFilterInputByTradeMark(fliter){
  return async function (dispatch){
    dispatch({
      type: CHANGE_FILTER_INPUT_BY_TRADEMARK,
      payload: fliter
    })
  }
}
//-----------------------------------------------------------------------------



//-----------------------Filter render-----------------------------------------

export function filterByCategorie() {
    return async function (dispatch) {
        dispatch({
          type: FILTER_BY_CATEGORIE,
        });
      };
}
export function filterByType() {
    return async function (dispatch) {
        dispatch({
          type: FILTER_BY_TYPE,
        });
      };

//------------------------------------------------------------------------------

}
export function filterByTrademark() {
  return async function (dispatch){
    dispatch({
      type: FILTER_BY_TRADEMARK
    })
  }
}