import { useState } from 'react'

const Button = ({ onClick, text }) => {
  console.log('Button', onClick, text)
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodOnClick = () => {
    console.log('handleGoodOnClick')
    setGood(good + 1)
  }

  const handleNeutralOnClick = () => {
    console.log('handleNeutralOnClick')
    setNeutral(neutral + 1)
  }

  const handleBadOnClick = () => {
    console.log('handleBadOnClick')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodOnClick} text='good' />
      <Button onClick={handleNeutralOnClick} text='neutral' />
      <Button onClick={handleBadOnClick} text='bad' />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App