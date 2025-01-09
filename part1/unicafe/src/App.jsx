import { useState } from 'react'

const Button = ({ onClick, text }) => {
  console.log('Button', onClick, text)
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({ scoreCounts }) => {

  const [goodCount, neutralCount, badCount] = scoreCounts
  const total = goodCount + neutralCount + badCount

  const getAverageScore = () => {
    const averageScore = ((goodCount * 1) + (neutralCount * 0.5) + (badCount * -1)) / total
    const result = Number.isNaN(averageScore) ? '' : averageScore.toFixed(2)
    return result
  }

  const getPositivePercent = () => {
    const positivePercent = (goodCount / total) * 100
    const result = Number.isNaN(positivePercent) ? '' : positivePercent.toFixed(2) + '%'
    return result
  }
  
  if (total !== 0) {
    return (
      <div>
        <h1>Statistics</h1>    
        <p>good {goodCount}</p>
        <p>neutral {neutralCount}</p>
        <p>bad {badCount}</p>
        <p>all {total}</p>
        <p>average {getAverageScore()}</p>
        <p>positive {getPositivePercent()}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
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
      <Button onClick={handleGoodOnClick} text='Good' />
      <Button onClick={handleNeutralOnClick} text='Neutral' />
      <Button onClick={handleBadOnClick} text='Bad' />
      <Statistics scoreCounts={[good, neutral, bad]} />
    </div>
  )
}

export default App