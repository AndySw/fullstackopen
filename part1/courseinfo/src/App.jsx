const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Content = (props) => {
  //how to map array of Part components?
  return (
    <div>
      <Part name={part.name} exercises={part.exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] 
                          + props.exercises[1] 
                          + props.exercises[2]}
    </p>
  )  
}

const App = () => {
  
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course={course} />
    </div>
  )
}

export default App