import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Display amount={good} text="good"/>
      <Display amount={neutral}text="neutral"/>
      <Display amount={bad}text="bad"/>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
    </div>
  )
}
const Button = (props) =>{
  return(
      <button onClick={props.handleClick}>{props.text}</button>
  )
}
const Display = (props) =>{
  
  return(
    <p>{props.text}: {props.amount}</p>
  )
}

export default App