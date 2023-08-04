import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Photo from './components/Photo'
import { OperatorEnum } from './api'

function App() {
  const [count, setCount] = useState(10)
  const [operator, setOperator] = useState<OperatorEnum>(OperatorEnum.MULTIPLY)

  return (
    <>
      <Calculator op={operator} count={count} />
      <Photo />
    </>
  )
}

export default App
