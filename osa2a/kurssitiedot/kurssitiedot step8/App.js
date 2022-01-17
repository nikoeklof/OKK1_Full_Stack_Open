import React from 'react'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Test',
        exercises: 4,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}
const Course = (props) => {
  return (
    <div>
    <Header header={props.course.name}/>
    <Part part={props.course.parts[0]}/>
    <Part part={props.course.parts[1]}/>
    <Part part={props.course.parts[2]}/>
    <Part part={props.course.parts[3]}/>
    <Total total={props.course.parts}/>
    </div>
  )
}
const Header = (props) =>{
  return(
    <h1>
      {props.header}
    </h1>
  )
}
const Part = (props) =>{
  return(
    <p>
      {props.part.name}, Exercises: {props.part.exercises}
    </p>
  )
}

const Total = (props) =>{
  const reducer = props.total.reduce((sum, order) => {
    return sum + order.exercises
  }, 0)
  
  return <p>Total amount of exercises: {reducer}</p>
}
export default App