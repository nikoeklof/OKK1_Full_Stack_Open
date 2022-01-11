import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Display amount={good} text="good" />
      <Display amount={neutral} text="neutral" />
      <Display amount={bad} text="bad" />
      <Average amount={[good, neutral, bad]} />
      <All amount={[good, neutral, bad]} />
      <Positive amount={[good, neutral, bad]} />
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
const Average = (props) => {
  console.log(props)
  const total = props.amount[0] + props.amount[1] + props.amount[2]
  return (
    <p>Average: {(props.amount[0] - props.amount[2]) / total}</p>
  )
}
const All = (props) => {
  return (
    <p>All: {props.amount[0] + props.amount[1] + props.amount[2]}</p>
  )
}
const Positive = (props) => {
  return (
    <p>Positive: {(props.amount[0] / (props.amount[0] + props.amount[1] + props.amount[2])) * 100}%</p>
  )
}
export default App