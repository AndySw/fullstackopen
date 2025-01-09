import { useState } from 'react'

const Button = ({ onClick, text }) => {
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
      <table>
        <tbody>
          <StatisticsLine text='Good' value={goodCount} />
          <StatisticsLine text='Neutral' value={neutralCount} />
          <StatisticsLine text='Bad' value={badCount} />
          <StatisticsLine text='All' value={total} />
          <StatisticsLine text='Average' value={getAverageScore()} />
          <StatisticsLine text='Positive' value={getPositivePercent()} />
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const StatisticsLine = ({ text, value }) => {
  return (<tr><td>{text}:</td><td>{value}</td></tr>)
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodOnClick = () => {
    setGood(good + 1)
  }

  const handleNeutralOnClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadOnClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodOnClick} text='Good' />
      <Button onClick={handleNeutralOnClick} text='Neutral' />
      <Button onClick={handleBadOnClick} text='Bad' />
      <h1>Statistics</h1>
      <Statistics scoreCounts={[good, neutral, bad]} />
    </div>
  )
}

export default App