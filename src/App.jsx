import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore } from '../store/store.js'


function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function IncreaseBtn() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
function DecreaseBtn() {
  const decreasePopulation = useBearStore((state) => state.decreasePopulation)
  return <button onClick={decreasePopulation}>one down</button>
}


function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <BearCounter />
        <IncreaseBtn />
        <DecreaseBtn />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
