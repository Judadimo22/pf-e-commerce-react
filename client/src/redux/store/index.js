import {createStore,applyMiddleware,} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer/index"


// const store = createStore( composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));   

//                                NO OLVIDAR PASAR EL ROOTREDUCER CUANDO CONFIGUREMOS EL REDUCER                           



export default store;