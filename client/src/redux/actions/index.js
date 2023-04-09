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
export const POST_CLOTH = 'POST_CLOTH'
export const UPDATE_CLOTH = 'UPDATE_CLOTH'
export const PUT_USERS = "PUT_USERS"
export const POST_USERS = "POST_USERS"


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
export function getClothById(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/cloth/${id}`);
        dispatch({
          type: GET_BY_ID,
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



export function PostCloth(payload) {
  let json = axios.post(`http://localhost:3001/cloth`, payload);
  return { type: POST_CLOTH, payload: json };
}

export function DeleteCloth(idCloth){
  return async function(dispatch){
      return axios.delete(`http://localhost:3001/cloth/${idCloth}`)
  }
}

export function UpdateCloth(id, payload) {
  return async function(dispatch) {
      const json = await axios.put(`http://localhost:3001/cloth/${id}`, payload);
      return dispatch({
          type: UPDATE_CLOTH,
          payload: json.data
      });
  };
};
///---------------------USERS-----------------------
export const putUser = (id, payload) => async (dispatch) => {
  console.log(id, payload)
  try {
    const putCreate = await axios.put(`/users/${id}`, payload);

    return dispatch({
      type: "PUT_USERS",
      // payload: putCreate,

    });
  }
  catch (e) {
    console.log(e);
  }
}

export const createUser = (payload) => async (dispatch) => {
  try {
    const userCreate = await axios.post("/users", payload);
    return dispatch({
      type: "POST_USERS",
      payload: userCreate,

    });
  }
  catch (e) {
    console.log(e);
  }
}