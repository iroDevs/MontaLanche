import React from 'react'
import Login from '../components/Login'

import './styles/Login.css'

function pages () {
  return (
    <>
      <div className='container caixa-login'>
        <h1 className='display-3'>Seja Bem vindo!</h1>
        <Login />
      </div>
    </>
  )
}

export default pages
