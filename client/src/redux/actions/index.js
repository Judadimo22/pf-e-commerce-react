import axios from 'axios';
 export const GET_CLOTHES = 'GET_CLOTHES';
 export const GET_BY_ID = 'GET_BY_ID';
 export const GET_CLOTHE = 'GET_CLOTHE';

 export function GetClothes(){
    return async function (dispatch){
        let Json = await axios.get(`http://localhost:3001/clothes`);
        dispatch({
            type: GET_CLOTHES,
            payload: Json.data,
        });
    }
 };

 export function GetClotheById(id) {
    return async function (dispatch) {
        var Json = await axios.get(`http://localhost:3001/clothes/${id}`);
        return dispatch ({
            type: GET_BY_ID,
            payload: Json.data,
        });
    };
 };

export function GetClothe(name){
    return async function (dispatch){
        let Json = await axios.get('http://localhost:3001/clothes?name=' + name);
        dispatch({
            type: GET_CLOTHE,
            payload: Json.data
        });
    };
};