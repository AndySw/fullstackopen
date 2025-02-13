import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

function App() {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const lastId = persons.reduce((max, person) => {
      return person.id > max ? person.id : max
    }, 0)

    const newPerson = {
      name: newName,
      number: newNumber,
      id: lastId + 1
    }

    if (personExistsInArray(persons, newPerson)) {
      showPersonExistsAlert(newPerson)
      return
    }

    setPersons(persons.concat([newPerson]))
  }

  const personExistsInArray = (personArray, personToCheck) => {
    return personArray.some(existingPerson =>
      (personToCheck.name === existingPerson.name)
      && (personToCheck.number === existingPerson.number)
    )
  }

  const showPersonExistsAlert = (newPerson) => {
    alert(`${newPerson.name} is already added to phonebook`)
  }

  return (
    <div>

      <h2>Phonebook</h2>

      <Filter value={filter} onChange={e => setFilter(e.target.value)} />

      <h3>Add a new</h3>

      <PersonForm newName={newName}
        newNumber={newNumber}
        onChangeName={e => setNewName(e.target.value)}
        onChangeNumber={e => setNewNumber(e.target.value)}
        onSubmitClick={addPerson}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} />

    </div>
  )
}

export default App