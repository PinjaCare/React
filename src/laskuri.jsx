import React, { useState } from 'react'
import './App.css'

const Laskuri = ({huomio}) => {   //komponentti saa palauttaa ainoastaan yhden elementin(elemetnin sisällä voi olla monta elementtiä kuitenkin)

//Komponentin tilan määritys
const [luku, setLuku] = useState(0)

  return (
    <>
      <h3>{luku}</h3>

      <button onClick={() => setLuku(luku + 1)}>+</button> 
      <button onClick={() => setLuku(luku - 1)}>-</button> 
      <button onClick={() => setLuku(0)}>Reset</button> 

      <button onClick={huomio}>huomio</button>

    </>
  )
}

export default Laskuri