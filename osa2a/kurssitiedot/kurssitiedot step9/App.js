import React from 'react'


const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
    
  ]

  return (
    
      <Courses course={courses} />
    

  )
}
const Courses = (props) => {
  
 const course = props.course.map((content) => <div key={content.id}>
   <Header key={content.id} header={content.name}></Header>
   <Part key={content.id + 1} parts={content.parts}></Part>
   <Total total={content.parts}/>
   </div>)
  return(
    <div>
    {course}
    </div>
   
    
  )
  
}

const Header = (props) => {
  return (
    <h1>
      {props.header}
    </h1>
  )
}
const Part = (props) => {
  console.log(props)
  let parts = props.parts.map(part => <p key={part.id}>
    {part.name}, Exercises: {part.exercises}
  </p>)
  
  return (
    <div>
      {parts}
    </div>
    
  )
}

const Total = (props) => {
  const reducer = props.total.reduce((sum, order) => {
    return sum + order.exercises
  }, 0)

  return <p>Total amount of exercises: {reducer}</p>
}
export default App