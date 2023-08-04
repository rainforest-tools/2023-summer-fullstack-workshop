import { useEffect, useState } from 'react'
import { OperatorEnum, calculate } from '../api'

const Calculator = ({ count, op }: { count: number; op: OperatorEnum }) => {
  const [operator, setOperator] = useState<OperatorEnum>(op)
  const [a, setA] = useState<number>(count)
  const [b, setB] = useState<number>(count)
  const [result, setResult] = useState<number>(0)
  const update = async () => {
    const result = await calculate(operator, a, b)
    setResult(result)
  }

  useEffect(() => {
    if (a && b && operator) update()
  }, [a, b, operator])

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'stretch',
    gap: '1rem'
  }}>
    Calculator {count}
    <input type="number" value={a} onChange={e => setA(Number(e.target.value))} />
    <select name="operator" id="operator" value={operator} onChange={e => setOperator(e.target.value as OperatorEnum)}>
      {
        [
          {
            name: OperatorEnum.ADD,
            text: "+"
          },
          { name: OperatorEnum.SUBTRACT, text: '-' },
          { name: OperatorEnum.MULTIPLY, text: '*' },
          { name: OperatorEnum.DIVIDE, text: '/' }
        ].map(({ name, text }) => <option key={text} value={name}>{text}</option>)
      }
      {/* <option value="add">+</option>
      <option value="sub">-</option>
      <option value="mul">*</option>
      <option value="div">/</option> */}
    </select>
    <input type="number" value={b} onChange={e => setB(Number(e.target.value))} />
    {/* <button onClick={update}>Calulate {a} {operator} {b}</button>s */}
    <div>Result: {result}</div>
  </div>
}

export default Calculator