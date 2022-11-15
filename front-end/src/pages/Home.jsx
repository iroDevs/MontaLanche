/* eslint-disable no-unused-vars */
import React from 'react'
import MenuLateral from '../components/MenuLateral'
import HomePage from '../components/HomePage'
import ListLanche from '../components/ListLanche'

import './styles/Home.css'
const fakeInfo =
[
  {
    nome: 'X-caboco',
    imagem: '',
    preco: 'X-egg',
    ingredietes: ['pao', 'bife', 'alface', 'tomate', 'miho', 'bacon']
  },
  {
    nome: 'X-bacon',
    imagem: '',
    preco: 'X-egg',
    ingredietes: ['pao', 'bife', 'alface', 'tomate', 'miho', 'bacon']
  },
  {
    nome: 'X-caixa',
    imagem: '',
    preco: 'X-egg',
    ingredietes: ['pao', 'bife', 'alface', 'tomate', 'miho', 'bacon']
  },
  {
    nome: 'X-toleto',
    imagem: '',
    preco: 'X-egg',
    ingredietes: ['pao', 'bife', 'alface', 'tomate', 'miho', 'bacon']
  }
]
function pages () {
  return (
    <>
    <MenuLateral />

    <HomePage image={'image'} name={'Nome da lanchonete'} open={false} />
    <ListLanche lanches={fakeInfo} />
    </>
  )
}

export default pages
