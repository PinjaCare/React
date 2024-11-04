import React, { useState } from 'react'
import './App.css'

const Laskuri = (props) => {   //komponentti saa palauttaa ainoastaan yhden elementin(elemetnin sisällä voi olla monta elementtiä kuitenkin)

//Komponentin tilan määritys
const [luku, setLuku] = React.useState(0)

  return (
    <>
      <h3>{luku}</h3>

      <button onClick={() => setLuku(luku + 1)}>+</button> 

      <button onClick={props.huomio}>huomio</button>

    </>
  )
}

export default Laskuri