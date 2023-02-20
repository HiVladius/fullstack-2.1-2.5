const Course = ({ course }) => <h1>{course}</h1>

const Total = ({ parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  )
}

const Nodejs = ({ parts }) => {
  return (
    <div>
      <h2>{parts.name}</h2>
      <Parts parts={parts.parts} />
      <Total parts={parts.parts} />
    </div>
  )
}

const Parts = ({ parts }) =>
  parts.map((part) => ( 
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ))
  

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
      {
        name: 'Node.js',
        id: 2.1,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1,
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 3,
          },
        ],

      }

    ],
    
  }

  return (
    <div>
      <Course course={course.name} />
      <Parts parts={course.parts} />
      <Total parts={course.parts} />
      <Nodejs parts={course.parts[4]} />
    </div>
  )

  
}

export default App

