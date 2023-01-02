import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ToggleSwitch />
    </div>
  )
}

export default App
