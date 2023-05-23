import React from 'react'
import ReactDOM from 'react-dom/client'
//import {HookApp } from "./HookAppMain"
import { CounterApp } from './counter-app/CounterApp'
import  "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
