import React from 'react'

const App = () => {
  const course = 'Half Stack application development'


 const part1= {name:'Fundamentals of React',
exercises: 10}

const part2={name:'Using props to pass data',
exercises: 7}

const part3={name:'State of a component',
exercises: 14}



  return (
  <div>
    <Header course={course}/>
    <Content parts={part1}/>
  </div>
    
  )
}
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  const Part = {props}
  console.log(props)
  return(
    <div>
      {/* <Part><p>{props.name}</p></Part> */}
      
    </div>
  )
  
}

export default App