export enum OperatorEnum {
  ADD = 'add',
  SUBTRACT = 'sub',
  MULTIPLY = 'mul',
  DIVIDE = 'div',
}

export const calculate = async (operator: OperatorEnum, a: number, b: number) => {
  // const params = new URLSearchParams({ operator: 'add', a: '1', b: '2' })
  // const response = await fetch(`http://localhost:8000/math?${params.toString()}`)
  // const result = await response.json()
  // console.log(result)
  const reponse = await fetch(`http://localhost:8000/math`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ operator, a, b }),
  })
  const { result } = await reponse.json()
  return result
}

export const postAiArtPortrait = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const reponse = await fetch(`http://localhost:8000/ai-art-portrait`, {
    method: 'POST',
    body: formData,
  })
  const blob = await reponse.blob()
  return URL.createObjectURL(blob)
}
