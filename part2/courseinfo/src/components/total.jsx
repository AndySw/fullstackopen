const Total = (props) => {
    return (
      <p>Number of exercises {props.courseParts[0].exercises
        + props.courseParts[1].exercises
        + props.courseParts[2].exercises}
      </p>
    )
  }