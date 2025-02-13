import Person from './Person'

function Persons (props) {
    return (
        <div>
        {props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))
            .map(person => (
                  <Person key={person.id} name={person.name} number={person.number} />
                  )
                )
        }
        </div>
    )
}

export default Persons