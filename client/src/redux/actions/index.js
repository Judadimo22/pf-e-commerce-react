import axios from 'axios';
export const GET_CLOTHES = 'GET_CLOTHES';
export const GET_CLOTH = 'GET_CLOTH';
export const GET_BY_ID = 'GET_BY_ID';

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
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/cloth?name=" + name);
        dispatch({
          type: GET_CLOTHES,
          payload: json.data,
        });
      };
}