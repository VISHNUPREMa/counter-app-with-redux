import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/HomePage/home.jsx'
import {Provider} from 'react-redux';
import { store } from './Redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Provider store={store}>
<Home/>
</Provider>
  </React.StrictMode>,
)
