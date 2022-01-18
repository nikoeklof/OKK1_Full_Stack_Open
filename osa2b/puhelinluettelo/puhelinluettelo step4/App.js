import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setNewphoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const changeFilter = (event) => {
    setFilter(event.target.value)
  }
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
    }
    if (isNaN(parseInt(person.number)) === false) {
      person.number = parseInt(person.number);
    }
    else {
      person.number = 'no number given';
    }
    for (let i = 0; i < persons.length; i++) {
      if (person.name === persons[i].name) {
        alert(`${newName} is already added to phonebook`)
        return
      }
    }
    setPersons(persons.concat(person))
  }
  const renderPeople = () => {

    if (filter !== '') {
      
      var filtered = []
      for (let i = 0; i < persons.length; i++) {
        let a = persons[i].name.toUpperCase()
        let b = filter.toUpperCase()
        console.log(a)
        if (a.includes(b)) {
          filtered.push(persons[i])
        }
      }
      return filtered.map(person => <li key={person.name}>{person.name} <br></br> Number: {person.number}</li>)
    }
    else {
      var render = persons.map(person => <li key={person.name}>{person.name} <br></br> Number: {person.number}</li>)

      console.log(filtered)
      return render
    }

  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Filter shown</h2>
      <input value={filter} onChange={changeFilter}/>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          Phone number: <input value={phoneNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {renderPeople()}
      </ul>

    </div>
  )

}




export default App