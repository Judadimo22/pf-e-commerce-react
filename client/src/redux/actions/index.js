import axios from 'axios';
export const GET_CLOTHES = 'GET_CLOTHES';
export const GET_CLOTH = 'GET_CLOTH';

export function getClothes(){
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/cloth`);
        dispatch({
          type: GET_CLOTHES,
          payload: json.data,
        });
      }
}

export function getCloth(trademark) {
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/cloth?trademark=" + trademark);
        dispatch({
          type: GET_CLOTHES,
          payload: json.data,
        });
      };
}