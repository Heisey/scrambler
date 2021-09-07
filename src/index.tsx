import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Reset } from 'styled-reset'
import App from './App'
import { services } from './core'
import store from './store'

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Reset />
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.querySelector('#root')
)

services.reportWebVitals()