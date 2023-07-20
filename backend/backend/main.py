from typing import Annotated, Union
from enum import Enum
from io import BytesIO
from PIL import Image
from fastapi import FastAPI, File
from fastapi.responses import StreamingResponse
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

class CalculateResponse(BaseModel):
  result: Union[int, float]
  
@app.post("/math", response_model=CalculateResponse)
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
      raise Exception("invalid operator")

# use post method to upload image and return ai art portrait
@app.post("/ai-art-portrait")
async def ai_art_portrait(file: Annotated[bytes, File()]):
  # read image
  image = Image.open(BytesIO(file))
  image = image.convert("L")
  result = BytesIO()
  # save image
  image.save(result, "jpeg")
  result.seek(0)
  # response with image
  return StreamingResponse(result, media_type="image/jpeg")
