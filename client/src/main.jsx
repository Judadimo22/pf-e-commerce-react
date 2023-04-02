import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import  store  from "../src/redux/store/index"


import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/light-theme'



ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
    <React.StrictMode>
     <Auth0Provider 
    domain='dev-2llhwpnt06dhuqy3.us.auth0.com' 
    clientId='dDyL1k58O24ODoBGnD2n3awYccV0Zccf'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    />
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </React.StrictMode>
    </ThemeProvider>
  </Provider>

)
