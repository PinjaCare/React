import './App.css'
import React, {useState} from 'react'
import UserService from './services/User'
import md5 from 'md5'

const UserAdd = ({setLisäystila, setIsPositive, setMessage, setShowMessage}) => {

// Komponentin tilan määritys
const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')
const [newEmail, setNewEmail] = useState('')
const [newAccesslevelId, setNewAccesslevelId] = useState(2)
const [newUsername, setNewUsername] = useState('')
const [newPassword, setNewPassword] = useState('')


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newUser = {
        firstName: newFirstName.toUpperCase(),
        lastName: newLastName,
        email: newEmail,
        accesslevelId: parseInt(newAccesslevelId),
        username: newUsername,
        password: md5(newPassword) //Salataan md5 kirjaston metodilla
    }
    
    UserService.create(newUser)
    .then(response => {
      if (response.status === 200) {
       setMessage(`Added new user: ${newUser.firstName} ${newUser.lastName}`)
       setIsPositive(true)
       setShowMessage(true)
      
       setTimeout(() => {
        setShowMessage(false)
       }, 5000)

       setLisäystila(false)
    }

      })
      .catch(error => {
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)

        setTimeout(() => {
          setShowMessage(false)
         }, 6000)
      })
    }


  return (
    <div id="addNew">
       <h2>User add</h2>

       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={newFirstName} placeholder="First name"
                    onChange={({ target }) => setNewFirstName(target.value)} required />
            </div>
            <div>
                <input type="text" value={newLastName} placeholder="Last name"
                    onChange={({ target }) => setNewLastName(target.value)} required />
            </div>
            <div>
                <input type="email" value={newEmail} placeholder="Email"
                    onChange={({ target }) => setNewEmail(target.value)} />
            </div>
            <div>
                <input type="number" value={newAccesslevelId} placeholder="Access level"
                    onChange={({ target }) => setNewAccesslevelId(target.value)} />
            </div>
            <div>
                <input type="text" value={newUsername} placeholder="Username"
                    onChange={({ target }) => setNewUsername(target.value)} />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} />
            </div>
         
         <input type='submit' value='save' />
         <input type='button' value='back' onClick={() => setLisäystila(false)} />
       </form>

    </div>
  )
}

export default UserAdd