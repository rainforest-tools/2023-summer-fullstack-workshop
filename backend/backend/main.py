from enum import Enum
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
async def root():
  return {"message": "Hello World"}

class OperatorEnum(str, Enum):
  add = "add"
  sub = "sub"
  mul = "mul"
  div = "div"

@app.get("/math")
@app.get("/operator/{operator}/a/{a}/b/{b}")
async def calculate(operator: OperatorEnum, a: int, b: int):
  if operator == OperatorEnum.add:
    return {"result": a + b}
  elif operator == OperatorEnum.sub:
    return {"result": a - b}
  elif operator == OperatorEnum.mul:
    return {"result": a * b}
  elif operator == OperatorEnum.div:
    return {"result": a / b}
  else:
    return {"result": "invalid operator"}
  
class CalculateRequest(BaseModel):
  operator: OperatorEnum
  a: int
  b: int
  
@app.post("/math")
async def calculate_post(request: CalculateRequest):
  operator, a, b = request.operator, request.a, request.b
  match operator:
    case OperatorEnum.add:
      return {"result": a + b}
    case OperatorEnum.sub:
      return {"result": a - b}
    case OperatorEnum.mul:
      return {"result": a * b}
    case OperatorEnum.div:
      return {"result": a / b}
    case _:
      return {"result": "invalid operator"}