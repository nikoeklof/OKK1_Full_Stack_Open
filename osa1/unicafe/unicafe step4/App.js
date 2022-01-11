import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Statistics amount={[good, neutral, bad]} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
    </div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const Display = (props) => {

  return (
    <p>{props.text}: {props.amount}</p>
  )
}

const Statistics = (props) => {
  console.log(props)
  const total = props.amount[0] + props.amount[1] + props.amount[2]
  if(total === 0){
    return(
      <p>No feedback given</p>
    )
  }
  else{
  return (

    <p>
      Positive:{props.amount[0]} <br></br>
      Neutral:{props.amount[1]}<br></br>
      bad:{props.amount[2]}<br></br>

      All: {props.amount[0] + props.amount[1] + props.amount[2]} <br />
      Average: {(props.amount[0] - props.amount[2]) / total} <br />
      Positive: {(props.amount[0] / (props.amount[0] + props.amount[1] + props.amount[2])) * 100}% <br />
    </p>

  )
}
}
export default App