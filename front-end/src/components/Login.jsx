/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */

import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [navigate, setNavigate] = useState(false)

  function validateEmail (email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (regex.test(email)) {
      return true
    } else {
      return false
    }
  };
  useEffect(() => {
    setNavigate(false)
  })

  function handleChangeEmail ({ target: { value } }) {
    setEmail(value)
  };

  function handleChangePassword ({ target: { value } }) {
    setPassword(value)
  }

  function clickButton () {
    if (validateEmail(email)) {
      console.log(true)
      setNavigate(true)
    } else {
      console.log(false)
    }
  }
  return (
    <>
    <div className="input-group mb-3 caixa-login-form">
    <input onChange={handleChangeEmail} type="email" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
    <input onChange={handleChangePassword} type="password" className="form-control" placeholder="Senha" aria-label="Recipient's username" aria-describedby="basic-addon2" />

    <button onClick={clickButton} type="button" className="btn btn-outline-primary btn-login">Entrar</button>
    <a href="#!" > Cadastra-se</a>
    <a href="#!" > Esqueci a senha</a>
    {
      navigate
        ? <Navigate to='/home' />
        : undefined
    }

  </div>
</>

  )
}

export default Login
