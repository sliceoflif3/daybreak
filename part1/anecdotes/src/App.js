import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ clickHandler, text }) => {
  return (
    <button onClick={clickHandler}>{text}</button> 
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  // const rating = Array(anecdotes.length).fill(0)
  // console.log(rating)

  const [selected, setSelected] = useState(0)
  const [rating, setRating] = useState(Array(anecdotes.length).fill(0))
  console.log(rating)

  const clickNextHandler = () => {
    const randomNum = Math.floor(Math.random() * (anecdotes.length))
    setSelected(randomNum)
    console.log(randomNum)
  }

  const clickRateHandler = () => {
    const newRating = [...rating]
    newRating[selected]++
    setRating(newRating)
    console.log(newRating)
  }

  const maxRating = Math.max(...rating);
  const maxIndex = rating.indexOf(maxRating)

  return (
    <div>
      <Title text='Anectode of the day' />
      {anecdotes[selected]}
      <p>has {rating[selected]} votes</p>
      <br />
      <Button clickHandler={clickRateHandler} text='vote'/>
      <Button clickHandler={clickNextHandler} text='next anecdote' />
      <Title text='Anectode with most votes' />
      {anecdotes[maxIndex]}
      <p>has {maxRating} votes</p>
    </div>
  )
}

export default App