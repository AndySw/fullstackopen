import { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas'}])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personArray = [{
      name: newName
    }]

    console.log(personArray)

    setPersons(persons.concat(personArray))

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(person => (
        <div>{person.name}</div>
      ))}

    </div>
  )
}

export default App