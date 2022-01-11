import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <table>
        
        <tbody>
        <StatisticsLine amount={good} text="good" />
        <StatisticsLine amount={neutral} text="neutral" />
        <StatisticsLine amount={bad} text="bad" />
        <StatisticsLine amount={(good / (good + neutral + bad)) * 100 + " %"} text="positive" />
        </tbody>
      </table>


    </div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


const StatisticsLine = (props) => {

  console.log(props)
 
  
    return (

      <tr>
        <td>{props.text}</td>
        <td>{props.amount}</td>
      </tr>

    )
  
}
export default App