/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Typography from '@mui/material/Typography'
import './style/HomePage.css'
export default function HomePage ({ image = 'https://img.elo7.com.br/product/original/3159FC2/papel-de-parede-adesivo-restaurante-lanchonete-cozinha-comprar-papel-de-parede.jpg', name, open }) {
  const style = {

    backgroundImage: 'url:(https://img.elo7.com.br/product/original/3159FC2/papel-de-parede-adesivo-restaurante-lanchonete-cozinha-comprar-papel-de-parede.jpg)'
  }

  return (
    <div className='home-page' style={style} >

<Typography variant="h1" gutterBottom>
      <div className='caixa'>
       Lanches
      </div>
      </Typography>
    </div>
  )
}
