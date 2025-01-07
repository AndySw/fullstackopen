const Header = (props) => {
  return (<h1>{props.courseName}</h1>)
}

const Content = (props) => {
  //how to map array of Part components?
  return (
    <div>
      <Part name={props.courseParts[0].name} exercises={props.courseParts[0].exercises} />
      <Part name={props.courseParts[1].name} exercises={props.courseParts[1].exercises} />
      <Part name={props.courseParts[2].name} exercises={props.courseParts[2].exercises} />
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
    <p>Number of exercises {props.courseParts[0].exercises
      + props.courseParts[1].exercises
      + props.courseParts[2].exercises}
    </p>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, 
      {
        name: 'Using props to pass data',
        exercises: 7
      }, 
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

export default App