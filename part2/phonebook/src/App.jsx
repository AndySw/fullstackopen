import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

    if(personExistsInArray(persons, newPerson)) {
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