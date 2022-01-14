import React, { useState } from 'react'
const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  return (
    <div>
      <h1>Anecdotes</h1>
      <Button handleClick={() => setSelected(Math.round(Math.random() * 6))} text="next anecdote" />
      <p>{anecdotes[selected]}</p>
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
          <StatisticsLine amount={(good / (good + neutral + bad)) * 100} text="positive" />
          <StatisticsLine amount={((good - bad)) / (good + neutral + bad)} text="average" />
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

  if (isNaN(props.amount)) {
    return (
      <tr>
        <td>
          {props.text}:
        </td>
        <td>
          no data
        </td>
      </tr>
    )
  } else {
    if (props.text === "positive") {
      return (

        <tr>
          <td>{props.text}:</td>
          <td>{props.amount} %</td>
        </tr>

      )
    }
    else {
      return (
        <tr>
          <td>{props.text}:</td>
          <td>{props.amount}</td>
        </tr>
      )
    }
  }


}
export default App