import './App.css'
import React from 'react'

const Viesti = (props) => {   //komponentti saa palauttaa ainoastaan yhden elementin(elemetnin sisällä voi olla monta elementtiä kuitenkin)
    <>
      <p>{props.teksti}</p>
    </>
}

export default Viesti