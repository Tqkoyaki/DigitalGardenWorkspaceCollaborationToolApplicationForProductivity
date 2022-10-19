import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Amplify } from 'aws-amplify';
//@ts-ignore
import config from './aws-exports.js'
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*@ts-ignore*/}
    <App />
  </React.StrictMode>
)
