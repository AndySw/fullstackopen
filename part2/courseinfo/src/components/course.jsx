const Course = () => {
    return (
        <div>
          <Header courseName={course.name} />
          <Content courseParts={course.parts} />
          <Total courseParts={course.parts} />
        </div>
    )
}