import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import  store  from "../src/redux/store/index"
import './index.css'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/light-theme'



ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
    </ThemeProvider>
  </Provider>
)
