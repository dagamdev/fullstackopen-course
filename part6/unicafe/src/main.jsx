import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const state = store.getState()

  /** @param {CounterActions['type']} type */
  const getAction = (type) => {
    return () => {
      store.dispatch({
        type
      })
    }
  }

  return (
    <main>
      <button onClick={getAction('GOOD')}>good</button> 
      <button onClick={getAction('OK')}>ok</button> 
      <button onClick={getAction('BAD')}>bad</button>
      <button onClick={getAction('ZERO')}>reset stats</button>
      <p>good {state.good}</p>
      <p>ok {state.ok}</p>
      <p>bad {state.bad}</p>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
