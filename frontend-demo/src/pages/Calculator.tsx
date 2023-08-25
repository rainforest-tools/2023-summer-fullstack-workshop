import { useEffect, useState } from 'react'
import { OperatorEnum, calculate } from '../api'
import { Box, Button, MenuItem, Stack, TextField } from '@mui/material';

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
    <Stack direction={{ xs: "column", md: "row" }} alignItems="stretch" justifyContent="center" spacing={2} width="100%">
      <TextField fullWidth type="number" variant="outlined" color="secondary" size="small" label="a" value={a} onChange={e => setA(Number(e.target.value))} />
      <Box width="fit-content"><TextField fullWidth select variant="outlined" color="secondary" size="small" label="operator" name="operator" id="operator" value={operator} onChange={e => setOperator(e.target.value as OperatorEnum)}>
        {
          [
            {
              name: OperatorEnum.ADD,
              text: "+"
            },
            { name: OperatorEnum.SUBTRACT, text: '-' },
            { name: OperatorEnum.MULTIPLY, text: '*' },
            { name: OperatorEnum.DIVIDE, text: '/' }
          ].map(({ name, text }) => <MenuItem key={text} value={name}>{text}</MenuItem>)
        }
        {/* <option value="add">+</option>
      <option value="sub">-</option>
      <option value="mul">*</option>
      <option value="div">/</option> */}
      </TextField></Box>
      <TextField fullWidth type="number" variant="outlined" size="small" color="secondary" label="b" value={b} onChange={e => setB(Number(e.target.value))} />
    </Stack>
    {/* <button onClick={update}>Calulate {a} {operator} {b}</button>s */}
    <Button fullWidth variant="contained" color="primary">Calculate</Button>
    <div>Result: {result}</div>
  </div>
}

export default Calculator