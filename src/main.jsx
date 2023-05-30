import React from 'react'
import ReactDOM from 'react-dom/client'
//import {HookApp } from "./HookAppMain"
//import { CounterApp } from './counter-app/CounterApp'
//import { CustomHook } from './counter-app/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/simpleform'
//import { SimpleFormWithCustomHook } from './02-useEffect/simpleformwithcustomhook'
import { MultipleHook } from './03-examples/MultipleCustomHooks'
import  "./styles.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleHook />
  </React.StrictMode>,
)
