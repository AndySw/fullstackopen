import Notes from "./components/Notes"

const App = ({ notes }) => {
  return (
    <div>
      {notes.map(note => <Notes key={note.id} content={note.content} />)}
    </div>
  )
}

export default App