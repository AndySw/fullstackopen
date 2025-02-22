import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll().then(persons => {
      setPersons(persons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const lastId = persons.reduce((max, person) => {
      return person.id > max ? person.id : max
    }, 0)

    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(Number(lastId) + 1)
    }

    if (hasSameNameAndNumber(persons, newPerson)) {
      showPersonExistsAlert(newPerson)
      return
    }

    const found = getPersonWithNewNumber(persons, newPerson)

    if ((found) && confirmNumberReplacement(newPerson)) {
      personService
        .update(found.id, newPerson)
        .then(newPerson => {
          const truncatedPersons = persons.filter(p => p.id !== found.id)
          setPersons(truncatedPersons.concat([newPerson]))
        })
    } else {
      personService
        .create(newPerson)
        .then(newPerson => setPersons(persons.concat([newPerson])))
    }
  }

  const getPersonWithNewNumber = (persons, newPerson) =>
    persons.find((person) => (person.name === newPerson.name) && (person.number !== newPerson.number))

  const hasSameNameAndNumber = (personArray, personToCheck) => {
    return personArray.some(existingPerson =>
      (personToCheck.name === existingPerson.name)
      && (personToCheck.number === existingPerson.number)
    )
  }

  const showPersonExistsAlert = (newPerson) =>
    alert(`${newPerson.name} is already added to phonebook`)

  const confirmNumberReplacement = (newPerson) =>
    window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)

  const removePerson = (personToRemove) => {
    if (window.confirm(`Delete ${personToRemove.name}?`)) {

      personService.remove(personToRemove.id).then(() => {
        const truncatedPersons = persons.filter(p => p.id !== personToRemove.id)
        setPersons(truncatedPersons)
      })

    }
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

      <Persons persons={persons} filter={filter} removePersonHandler={(personToRemove) => removePerson(personToRemove)} />

    </div>
  )
}

export default App