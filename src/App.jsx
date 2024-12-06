import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message'

const App = () => {

//App componentin tila
const [showLaskuri, setShowLaskuri] = useState(false)
//Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)


const huomio = () => {
  alert("alert alertttt!")
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

  return ( //returnissa on jsx koodia, eli kaikki mikä aaltosulkeissa on javascriptiä ja kaikki muu html
    <div className='App'>
      <h1>Helloo</h1>

      {showMessage && <Message message={message} isPositive={isPositive}/> /*aaltosulkeissa aina javascript*/}

      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>

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
