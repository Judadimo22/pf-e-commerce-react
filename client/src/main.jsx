import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>	  
    <Auth0Provider 
    domain='dev-2llhwpnt06dhuqy3.us.auth0.com' 
    clientId='dDyL1k58O24ODoBGnD2n3awYccV0Zccf'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >
      <BrowserRouter>
          <App />	   
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>	 
  </Provider>
)	