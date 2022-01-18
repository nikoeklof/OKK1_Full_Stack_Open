import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setNewphoneNumber] = useState('')
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewphoneNumber(event.target.value)
  }
  
  const addPerson = (event) => {
    
    event.preventDefault()
    var person = {
      name: newName,
      number: phoneNumber,
      id: persons.length
      
    }
    if(isNaN(parseInt(person.number)) === false) {
      person.number = parseInt(person.number);
    }
    else {
      person.number = 'No number given';
    }
    for(let i = 0; i < persons.length; i++){
      if(person.name === persons[i].name){
        alert(`${newName} is already added to phonebook`)
        return
      }
    }
    setPersons(persons.concat(person))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} 
          onChange={handleNameChange}/>
        </div>
        <div>
          Phone number: <input value={phoneNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => <li key={person.id}>{person.name} Number: {person.number}</li>)}
      </ul>
      
    </div>
  )

}



export default App