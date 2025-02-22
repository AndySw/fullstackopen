function Person(props) {
    return (
        <div key={props.id}>
            {props.name} {props.number} <button onClick={props.removePersonHandler}>delete</button>
        </div>
    )
}

export default Person