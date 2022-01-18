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
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewphoneNumber(event.target.value)
  }
 
  
  return (
    <div>
    <h2>Phonebook</h2>

    {/* <Filter filter={[persons, filter]}/> */}

    <h3>Add a new</h3>

    <PersonForm name={newName}/>
  
    

    <h3>Numbers</h3>

    <Persons persons={persons}/>
  </div>
  )

}
const Filter = (props) =>{
      return null
    // var filtered = []
    // for (let i = 0; i < props.persons.length; i++) {
    //   let a = props.persons[i].name.toUpperCase()
    //   let b = props.filter.toUpperCase()
    //   console.log(a)
    //   if (a.includes(b)) {
    //     filtered.push(props.persons[i])
    //   }
    // }
    // return filtered.map(person => <li key={person.name}>{person.name} <br></br> Number: {person.number}</li>)
  
}
const PersonForm = (props) => {
  console.log(props)
  return (
   
    <div>
    name: <input value={props.form[0]}/>
    <br></br>
    <br></br>
    phone number: <input value={props.form[1]}/>
    <br></br>
    </div>
   
  )
}
const Persons = (props) => {
  return (
    <div>
      {props.persons.map(person => <p key={person.name}>Name: {person.name} <br></br>Number: {person.number}</p>)}
    </div>
  )
}



export default App