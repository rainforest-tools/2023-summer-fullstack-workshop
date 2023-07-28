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
hideInToc: true
---

# FastAPI

FastAPI framework, high performance, easy to learn, fast to code, ready for production

---
hideInToc: true
---

# Table of Contents

<Toc columns="2" />

---
layout: two-cols
---

# Web Application Architecture

<img src='/web-application-architecture-diagram.png' alt='Web Application Architecture' class='w-full' />

::right::

- frontend or client
  - web app
  - mobile app
  - edge device
  - prompt app
- backend
  - APIs
  - database
  - storage

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
      raise HTTPException(status_code=400, detail='Invalid operator')
```

[Error Code](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)

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
src: ./pages/ai-art-portrait.md
---
---
src: ./pages/chatgpt.md
---
---
src: ./pages/midjourney.md
---
---

# Deployment
## Dockerfile - `tiangolo/uvicorn-gunicorn-fastapi`
```dockerfile
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

RUN apt update -y && apt install -y gcc git

RUN pip3 install poetry
RUN poetry config virtualenvs.create false

WORKDIR /app
ENV PYTHONPATH="/app:${PYTHONPATH}"

COPY ./pyproject.toml ./poetry.lock /app/
RUN poetry install --no-root --only main

COPY ./backend /app/backend

# uvicorn-gunicorn-fastapi
ENV MODULE_NAME="backend.main"
ENV VARIABLE_NAME="app"
ENV PORT=8000

# gunicorn
ENV FORWARDED_ALLOW_IPS="*"
```

---

## Dockerfile - `python:3.11`

### Prepare `requirements.txt`
```
poetry export -f requirements.txt --output requirements.txt --without-hashes
```

```dockerfile 
FROM python:3.11

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt
 
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
 
COPY ./backend /app/backend
 
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## Dockerfile - multi-stage build

```dockerfile
FROM python:3.11-buster as builder

RUN pip install poetry

ENV POETRY_NO_INTERACTION=1 \
  POETRY_VIRTUALENVS_IN_PROJECT=1 \
  POETRY_VIRTUALENVS_CREATE=1 \
  POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

COPY pyproject.toml poetry.lock ./

RUN poetry install --without dev --no-root && rm -rf $POETRY_CACHE_DIR

# The runtime image, used to just run the code provided its virtual environment
FROM python:3.11-slim-buster as runtime

ENV VIRTUAL_ENV=/app/.venv \
  PATH="/app/.venv/bin:$PATH"

COPY --from=builder ${VIRTUAL_ENV} ${VIRTUAL_ENV}

COPY backend ./backend

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]

```

---

## `docker build` and `docker run`

```bash
docker build -t backend .
```

- `-t`: tag name
- `.`: build context. will find Dockerfile in current directory

```bash
docker run -d --name backend-app -p 3000:8000 backend
```

- `-d, --detach`: Run container in background and print container ID
- `-p, --expose`: Expose a port or a range of ports

---

# More Resources
- TorchScript
- ONNX
- [Lightning AI](https://lightning.ai)
- [Hugging Face](https://huggingface.co/)
- [roadmap.sh](https://roadmap.sh/backend)
