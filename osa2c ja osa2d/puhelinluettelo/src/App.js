import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setNewphoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const hook = () => {
    axios.get('http://localhost:3001/persons').then(response =>{
    setPersons(response.data)
    })
  }
  useEffect(hook, [])
  const changeFilter = (event) => {
    setFilter(event.target.value)
  }
  const handleNameChange = (event) => {

    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewphoneNumber(event.target.value)
  }
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={[{ filter, changeFilter }]} />

      <h3>Add a new</h3>
      <PersonForm form={[{ newName, handleNameChange }, { phoneNumber, handleNumberChange }, { persons, setPersons }]} />

      <h3>Numbers</h3>
      <Persons persons={[persons, filter]} />
    </div>
  )

}
const Filter = (props) => {
  return (
    <div>
      <h2>Filter numbers</h2>
      <input value={props.filter[0].filter} onChange={props.filter[0].changeFilter} />
    </div>
  )


}
const PersonForm = (props) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      let name = props.form[0].newName
      let number = props.form[1].phoneNumber
      if (number === '') {
        number = 'No number given'
      }
      props.form[2].setPersons(props.form[2].persons.concat({ name: name, number: number }))
    }}>
      <div>
        name: <input value={props.form[0].newName} onChange={props.form[0].handleNameChange} />
        <br></br>
        <br></br>
        phone number: <input value={props.form[1].phoneNumber} onChange={props.form[1].handleNumberChange} />
        <br></br>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}
const Persons = (props) => {
  let filttered = []
  let filter = props.persons[1].toUpperCase()
  if (filter !== '') {
    for (let i = 0; i < props.persons[0].length; i++) {
      let person = props.persons[0][i].name.toUpperCase()
      if (person.includes(filter)) {
        filttered.push(props.persons[0][i])
      }
    }
    return (
      <div>
        {filttered.map(person => <p key={person.name}>Name: {person.name} <br></br>Number: {person.number}</p>)}
      </div>
    )
  } else {
    return (
      <div>
        {props.persons[0].map(person => <p key={person.name}>Name: {person.name} <br></br>Number: {person.number}</p>)}
      </div>
    )
  }
}




export default App