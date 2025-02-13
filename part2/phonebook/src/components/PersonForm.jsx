function PersonForm (props) {
    return (
        <form>
            <div>
                name: <input value={props.newName} onChange={props.onChangeName} />
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.onChangeNumber} />
            </div>
            <div>
                <button type="submit" onClick={props.onSubmitClick}>add</button>
            </div>
        </form>
    )
}

export default PersonForm