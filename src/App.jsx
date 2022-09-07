import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ReactLog from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card price="100" src={ReactLog}/>
    </div>
  )
}

export default App
