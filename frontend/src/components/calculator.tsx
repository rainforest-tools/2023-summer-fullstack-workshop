import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { OperatorEnum, getMath } from '../api';

const Calculator = () => {
  const [a, setA] = useState<string>('')
  const [b, setB] = useState<string>('')
  const [operator, setOperator] = useState<OperatorEnum>()
  const [result, setResult] = useState<string>()
  const value = operator ? b : a
  const update = (newValue: string) => {
    if (operator) {
      setB(newValue)
    } else {
      setA(newValue)
    }
  }
  const calculate = async () => {
    if (!operator) return
    const result = await getMath(operator, Number(a), Number(b))
    setResult(result.toString())
  }

  useEffect(() => {
    console.log(`${a} ${operator} ${b}`)
  }, [a, b, operator])

  return <Grid container spacing={2}>
    <Grid xs={12}>
      <TextField value={result ?? value} onChange={e => update(e.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{ width: '100%' }} />
    </Grid>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
      return <Grid xs={4} key={i}>
        <Button onClick={() => update(value + i.toString())}>{i}</Button>
      </Grid>
    })}
    <Grid xs={4}>
      <Button onClick={() => setOperator(OperatorEnum.ADD)}>+</Button>
    </Grid>
    <Grid xs={4}>
      <Button onClick={() => setOperator(OperatorEnum.SUBTRACT)}>-</Button>
    </Grid>
    <Grid xs={4}>
      <Button onClick={() => setOperator(OperatorEnum.MULTIPLY)}>x</Button>
    </Grid>
    <Grid xs={4}>
      <Button onClick={() => setOperator(OperatorEnum.DIVIDE)}>/</Button>
    </Grid>
    <Grid xs={4}>
      <Button onClick={calculate}>=</Button>
    </Grid>
  </Grid>
}

export default Calculator