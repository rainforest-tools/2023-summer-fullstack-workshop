---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## FastAPI
  FastAPI framework, high performance, easy to learn, fast to code, ready for production

  Learn more at [FastAPI](https://fastapi.tiangolo.com)
drawings:
  persist: false
transition: slide-left
title: FastAPI
---

# FastAPI

FastAPI framework, high performance, easy to learn, fast to code, ready for production

---
layout: default
---

# Table of contents

<Toc></Toc>

---

# Web Application Architecture

<img src='/web-application-architecture-diagram.png' alt='Web Application Architecture' class='h-full' />

---
layout: two-cols
---

# FastAPI
- Install

```bash
poetry add "fastapi[all]"
```

- `backend/main.py`

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
  return {"message": "Hello World"}
```

- uvicorn

```bash
uvicorn backend.main:app --reload
```

- API: [http://127.0.0.1:8000](http://127.0.0.1:8000.)
- API docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- API redoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

::right::

# [Poetry](https://python-poetry.org/)

- [Install](https://python-poetry.org/docs/#installation)
  - Install [pipx](https://github.com/pypa/pipx)

```bash
brew install pipx
pipx ensurepath
pipx install poetry
```
- Create Project

```bash
poetry new backend
poetry config virtualenvs.in-project true
poetry install
```

---

## URL
![](/mdn-url-all.png)
> [reference](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

### [Path Parameters](https://fastapi.tiangolo.com/tutorial/path-params/)
```python
@app.get('/operator/{operator_name}/a/{a}/b/{b}')
async def calculate(operator: OperatorEnum, a: int, b: int):
  # calculation process with chosen opator...
```

### [Query Parameters](https://fastapi.tiangolo.com/tutorial/query-params/)
```
http://127.0.0.1:8000/math?operator={operator}&a={a}&b={b}
```
```python
@app.get("/math")
async def calculate(operator: OperatorEnum, a: int, b: int):
  # calculation process with chosen opator...
```

---

## [Request Body](https://fastapi.tiangolo.com/tutorial/body/)
- Define Model([pydantic](https://pydantic-docs.helpmanual.io/))

```python
class CalculateRequest(BaseModel):
  Operator: OperatorEnum
  a: int
  b: int
```

- `POST` method
```python
@app.post('/math')
async def calculate(calculation: Calculation):
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
```

---

## [Response Model](https://fastapi.tiangolo.com/tutorial/response-model/)

```python
class CalculateResponse(BaseModel):
  result: Union[int, float]
```

```python
@app.post('/math', response_model=CalculateResponse)
async def calculate(calculation: Calculation):
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
```

---
src: ./pages/chatgpt.md
---
---
src: ./pages/midjourney.md
---

---

# More Resources
- TorchScript
- ONNX