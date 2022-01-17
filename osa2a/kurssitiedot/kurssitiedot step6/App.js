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
    <Total total={props}/>
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
  return(
    <p>
      Total number of exercises: {props.total.course.parts[0].exercises + props.total.course.parts[1].exercises + props.total.course.parts[2].exercises}
    </p>
  )
}
export default App