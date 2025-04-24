import React from 'react'
import Card2 from './Card2'

const Card = (props) => {
  return (
    <>
    <h1>my name is {props.name}</h1>
    <Card2 username = {props.name}></Card2>
    </>
  )
}

export default Card