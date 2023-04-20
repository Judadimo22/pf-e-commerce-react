import axios from "axios";
export const GET_CLOTHES = "GET_CLOTHES";
export const GET_CLOTH = "GET_CLOTH";
export const GET_BY_ID = "GET_BY_ID";
export const FILTER = "FILTER";
export const CHANGE_FILTER_INPUT_BY_TYPE = "CHANGE_FILTER_INPUT_BY_TYPE";
export const CHANGE_FILTER_INPUT_BY_CATEGORIE =
  "CHANGE_FILTER_INPUT_BY_CATEGORIE";
export const CHANGE_FILTER_INPUT_BY_TRADEMARK =
  "CHANGE_FILTER_INPUT_BY_TRADEMARK";
export const SEARCH = "SEARCH";
export const POST_CLOTH = "POST_CLOTH";
export const UPDATE_CLOTH = "UPDATE_CLOTH";
export const PUT_USERS = "PUT_USERS";
export const POST_USERS = "POST_USERS";
export const GET_USERS = "GET_USERS";
export const GET_ORDERS = "GET_ORDERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const SORT_ASCENDING = "SORT_ASCENDING";
export const SORT_DESCENDING = "SORT_DESCENDING";
export const CACHIMBA = "CACHIMBA";
export const UPDATE_USER = 'UPDATE_USER';
export const INFO_USER_BY_ID = 'INFO_USER_BY_ID'
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const POST_REVIEW = "POST_REVIEW";
export const CHANGE_INDEX = "CHANGE_INDEX";
export const SEARCH_USER = 'SEARCH_USER'
export const IS_SEARCH_INPUT = 'IS_SEARCH_INPUT'
export const CART_LENGTH = 'CART_LENGTH'



export const sortAscending = () => {
  return {
    type: SORT_ASCENDING
  };
};
export const sortDescending = () => {
  return {
    type: SORT_DESCENDING
  };
};

export function cartLength(payload) {
  return async function (dispatch) {
    dispatch({
      type: CART_LENGTH,
      payload: payload,
    });
  };
}
export function setSearchInput(payload) {
  return async function (dispatch) {
    dispatch({
      type: IS_SEARCH_INPUT,
      payload: payload,
    });
  };
}
export function getClothes() {
  return async function (dispatch) {
    let json = await axios.get(`/cloth`);
    dispatch({
      type: GET_CLOTHES,
      payload: json.data,
    });
  };
}

export function getUsers() {
  return async function (dispatch) {
    let json = await axios.get(`/users`);
    dispatch({
      type: GET_USERS,
      payload: json.data,
    });
  };
}

export function getCloth(name) {
  console.log(name);
  return async function (dispatch) {
    let json = await axios.get(`/cloth?name=${name}`);
    dispatch({
      type: GET_CLOTHES,
      payload: json.data,
    });
  };
}
export function getClothById(id) {
  return async function (dispatch) {
    let json = await axios.get(`/cloth/${id}`);
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

export const setSearchUser = (payload) => {
  return {
    type: SEARCH_USER,
    payload
  };
}

//-----------------------------------Change Input----------------------------------
export function clearFilters(payload) {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_FILTERS,
      payload:payload
    });
  };
}
export function ChangefilterInputByType(fliter) {
  return async function (dispatch) {
    dispatch({
      type: CHANGE_FILTER_INPUT_BY_TYPE,
      payload: fliter,
    });
  };
}
export function ChangefilterInputByCategorie(fliter) {
  return async function (dispatch) {
    dispatch({
      type: CHANGE_FILTER_INPUT_BY_CATEGORIE,
      payload: fliter,
    });
  };
}

export function ChangeFilterInputByTradeMark(fliter)  {
  return async function (dispatch)  {
    dispatch({
      type: CHANGE_FILTER_INPUT_BY_TRADEMARK,
      payload: fliter,
    });
  };
}
export function Filter()  {
  return async function (dispatch)  {
    dispatch({
      type: FILTER,
    });
  };
}
export function changeIndex(payload) {
  return async function (dispatch) {
    dispatch({
      type: CHANGE_INDEX,
      payload:payload
    });
  };
}
//-----------------------------------------------------------------------------


export function PostCloth(payload) {
  let json = axios.post(`/cloth`, payload);
  return { type: POST_CLOTH, payload: json };
}

export function DeleteCloth(idCloth) {
  return async function (dispatch) {
    return axios.delete(`/cloth/${idCloth}`);
  };
}

export function UpdateCloth(id, payload) {
  return async function (dispatch) {
    const json = await axios.put(`/cloth/${id}`, payload);
    return dispatch({
      type: UPDATE_CLOTH,
      payload: json.data,
    });
  };
}
///---------------------USERS-----------------------

export function updateUser (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`/users/${id}`, payload);
    return dispatch({
      type: UPDATE_USER,
      payload: json.data
    })
  }
}


export const putUser = (id, payload) => async (dispatch) => {
  console.log(id, payload);
  try {
    const putCreate = await axios.put(`/users/${id}`, payload);

    return dispatch({
      type: "PUT_USERS",
      // payload: putCreate,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createUser = (payload) => async (dispatch) => {
  try {
    const userCreate = await axios.post("/users", payload);
    return dispatch({
      type: "POST_USERS",
      payload: userCreate,
    });
  } catch (e) {
    console.log(e);
  }
};
export const getOrders = () => async (dispatch) => {
  try {
    const Orders = await axios.get("/feedback");
    return dispatch({
      type: GET_ORDERS,
      payload: Orders.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const infoUserById = (id) => async (dispatch) => {
  try {
    const user = await axios.get(`/users/${id}`);
    return dispatch({
      type: INFO_USER_BY_ID,
      payload: user.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const user = await axios.get(`/users/${id}`);
    return dispatch({
      type: GET_USER_BY_ID,
      payload: user.data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const postReview = (payload) => async (dispatch) => {
  try {
    const postReview = await axios.post("/review", payload);
    return dispatch({
      type: "POST_REVIEW",
    });
  } catch (error) {
    console.error(error);
  }
};
