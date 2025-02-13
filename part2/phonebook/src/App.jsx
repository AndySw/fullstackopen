import { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567'}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if(personExistsInArray(persons, newPerson)) {
      showPersonExistsAlert(newPerson)
      return
    }

    setPersons(persons.concat([newPerson]))
  }

  const personExistsInArray = (personArray, personToCheck) => {
    return personArray.some(existingPerson => 
      JSON.stringify(personToCheck) === JSON.stringify(existingPerson)
    )
  }

  const showPersonExistsAlert = (newPerson) => {
    alert(`${newPerson.name} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(person => (
        <div>
          {person.name} {person.number}
        </div>
      ))}

    </div>
  )
}

export default App