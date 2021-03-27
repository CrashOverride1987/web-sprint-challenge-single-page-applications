import React from 'react'

function Pizza({ values }) {
  if (!values) {
    return <h3>Working fetching your Pizza...</h3>
  }

  return (
    <div className='pizza container'>
      <h2>Name: {values.name}</h2>
      <p>Size: {values.size}</p>
      <p>Toppings: Pepperoni? {values.pepperoni}, Cheese? {values.cheese}, Extra Sauce? {values.xSauce}, Mushrooms? {values.mushrooms}</p>
      <p>Special Instructions: {values.special}</p>
    </div>
  )
}

export default Pizza
