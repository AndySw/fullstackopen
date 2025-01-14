const Header = ({ courseName }) => {
  return (<h1>{courseName}</h1>)
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.courseParts[0].name} exercises={props.courseParts[0].exercises} />
      <Part name={props.courseParts[1].name} exercises={props.courseParts[1].exercises} />
      <Part name={props.courseParts[2].name} exercises={props.courseParts[2].exercises} />
    </div>
  )
}

const Total = ({ courseParts }) => {
  return (
    <p style={{fontWeight: "bold"}}>Total of {courseParts[0].exercises
      + courseParts[1].exercises
      + courseParts[2].exercises} exercises 
    </p>
  )
}

const Course = ({ course }) => {
    return (
        <div>
          <Header courseName={course.name} />
          <Content courseParts={course.parts} />
          <Total courseParts={course.parts} />
        </div>
    )
}

export default Course