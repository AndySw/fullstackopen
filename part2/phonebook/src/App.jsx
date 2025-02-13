import { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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

    console.log(newPerson.id)

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
      <div>
        filter shown with <input value={newFilter} onChange={e => setNewFilter(e.target.value)} />
      </div>

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
      
      {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
              .map(person => (
                    <div key={person.id}>
                      {person.name} {person.number}
                    </div>
                    )
                  )
      }

    </div>
  )
}

export default App