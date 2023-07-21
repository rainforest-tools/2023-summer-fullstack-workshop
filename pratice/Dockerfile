FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

RUN apt update -y && apt install -y gcc git

RUN pip3 install poetry
RUN poetry config virtualenvs.create false

WORKDIR /app
ENV PYTHONPATH="/app:${PYTHONPATH}"

COPY ./pyproject.toml ./poetry.lock /app/
RUN poetry install --no-root --only main

COPY ./pratice /app/backend

# uvicorn-gunicorn-fastapi
ENV MODULE_NAME="backend.main"
ENV VARIABLE_NAME="api"
ENV PORT=8000

# gunicorn
ENV FORWARDED_ALLOW_IPS="*"
