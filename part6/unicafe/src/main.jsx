import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  return (
    <main>
      <button onClick={good}>good</button> 
      <button>ok</button> 
      <button>bad</button>
      <button>reset stats</button>
      <p>good {store.getState().good}</p>
      <p>ok</p>
      <p>bad</p>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
