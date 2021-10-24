import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container m-auto bg-gray-50">
      <p>this is container</p>

      <div className="br-container bg-gray-100">
        <p><code>br-container</code></p>
      </div>

      <div className="-mr-container-margin bg-gray-100">
        <p><code>-mr-container-margin</code></p>
      </div>

    <div className="-mr-container bg-gray-100">

      <code>-mr-container</code>
    </div>

    </div>
  )
}

export default App
