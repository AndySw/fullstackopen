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

const Content = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}    
    </div>
  )
}

const Total = ({ courseParts }) => {
  
  const getTotal = () => {
    const initialValue = 0

    const result = courseParts.reduce((sum, part) => {
      return sum + part.exercises
    }, initialValue)

    return result
  }
  
  return (
    <p style={{fontWeight: "bold"}}>Total of {getTotal()} exercises</p>
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