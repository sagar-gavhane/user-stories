import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Login from './screens/auth/Login/Login'
import './styles/main.css'

ReactDOM.render(<Login />, document.getElementById('root'))

serviceWorker.unregister()
