import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laskuri from './laskuri' 
import Viesti from './viesti'
import Posts from './Posts'
import CustomerList from './CustomerList'

const App = () => {

//App componentin tila
const [showLaskuri, setShowLaskuri] = useState(false)

const huomio = () => {
  alert("Huomio huomio")
}

// MYÖS NÄIN VOISI TEHDÄ, MUTTA TÄSSÄ TOTEUTUKSESSA "HELLO FROM REACT" PITÄISI SANOA MONTA KERTAA:
// if (showLaskuri === true)
// {
//   return(
//   <div className='App'>
//       <h1>Helloo</h1>

//       {showLaskuri && <Laskuri huomio={huomio} />}             
//   </div>
// )
// }

  return (
    <div className='App'>
      <h1>Helloo</h1>

      <CustomerList />

      <Posts />

      {showLaskuri && <Laskuri huomio={huomio} />}

      {/* {showLaskuri === true ? <Laskuri /> : <button>näytä</button>} <------ tekee saman asian kuin ylempi rivi */}

      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="tervehdys"/>

    </div>
  )
}

export default App
