import { useState, Dispatch, SetStateAction } from 'react'

export default function App () {
  console.log('Hello from APP component')
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getHandleClick = (state: Dispatch<SetStateAction<number>>) => {
    return () => state(v => v + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <div>
        <Button text='Good' handleClick={getHandleClick(setGood)} />
        <Button text='Neutral' handleClick={getHandleClick(setNeutral)} />
        <Button text='Bad' handleClick={getHandleClick(setBad)} />
      </div>

      <Statistics {...{good, neutral, bad}} />
    </div>
  )
}

function Statistics ({ good, neutral, bad }: Record<'good' | 'neutral' | 'bad', number>
) {
  const all = good + neutral + bad

  return (
    <section>
      <h2>Statistics</h2>

      {all === 0
        ? <p>No feedback given</p>
        : <table>
          <tbody>
            <StatisticLine text='Good:' value={good} />
            <StatisticLine text='Neutral:' value={neutral} />
            <StatisticLine text='Bad:' value={bad} />
            <StatisticLine text='All:' value={all} />
            <StatisticLine text='Average:' value={all / 3} />
            <StatisticLine text='Positive:' value={good * 100 / all} extra='%' />
          </tbody>
        </table>
      }
    </section>
  )
}

function Button ({ text, handleClick }: {
  text: string
  handleClick: () => void
}) {
  return <button onClick={handleClick}>{text}</button>
}

function StatisticLine ({ text, value, extra }: {
  text: string
  value: number
  extra?: string
}) {
  return <tr>
    <td>{text}</td>
    <td>{value}{extra}</td>
  </tr>
}
