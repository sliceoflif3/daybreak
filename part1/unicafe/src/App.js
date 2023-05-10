import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr><td>{text}</td>
      <td>{value}</td></tr >
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all)
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} />
          </tbody>
        </table>
      </div>
    )
  else return (
    <div>No feedback given</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all 
  const positive = (all ? (good * 100) / all : 0) + '%'

  return (
    <div>
      <Title text={'give feedback'} />
      <Button handleClick={() => { setGood(good + 1) }} text="good" />
      <Button handleClick={() => { setNeutral(neutral + 1) }} text="neutral" />
      <Button handleClick={() => { setBad(bad + 1) }} text="bad" />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App