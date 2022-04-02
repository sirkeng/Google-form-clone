import { Row, Col } from 'antd'
import GoogleLogin from 'react-google-login'

import { useDocumentTitle } from './utils'
import Login from './Login'

import './App.css'

const responseGoogle = (response) => {
  console.log(response);
}

const App = () => {
  useDocumentTitle('login')

  return (
    <Login />
  )
}

export default App
