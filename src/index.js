import React from 'react'
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import * as atatus from 'atatus-spa';
atatus.config('8e8d8e549d14436693d7909fe42cda16').install();

/*const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />) */

const container = document.getElementById('root');
render(<App />, container);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

atatus.notify(new Error('Test Atatus Setup'));


