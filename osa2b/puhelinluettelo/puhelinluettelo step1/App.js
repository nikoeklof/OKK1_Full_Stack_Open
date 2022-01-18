import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const addPerson = (event) => {
    event.preventDefault()
    var person = {
      name: newName,
      id: persons.length
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      <RenderPeople people={persons}/>
      </ul>
      
    </div>
  )

}

const RenderPeople = (props) =>{
  console.log(props)
  var people = props.people.map(person => <li key={person.id}>{person.name}</li>)
  return people
  

  
}


export default App