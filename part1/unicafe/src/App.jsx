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
  const [all, setAll] = useState(0)

  const handleGoodOnClick = () => {
    console.log('handleGoodOnClick')
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralOnClick = () => {
    console.log('handleNeutralOnClick')
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadOnClick = () => {
    console.log('handleBadOnClick')
    setAll(all + 1)
    setBad(bad + 1)
  }

  const getAverageScore = () => {
    const averageScore = ((good * 1) + (neutral * 0.5) + (bad * -1)) / all
    const result = Number.isNaN(averageScore) ? '' : averageScore.toFixed(2)
    return result
  }

  const getPositivePercent = () => {
    const positivePercent = (good / all) * 100
    const result = Number.isNaN(positivePercent) ? '' : '%' + positivePercent.toFixed(2)
    return result
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
      <p>all {all}</p>
      <p>average {getAverageScore()}</p>
      <p>positive {getPositivePercent()}</p>
    </div>
  )
}

export default App