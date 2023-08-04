---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## React and MUI

  Learn more at [React](https://react.dev) and [MUI](https://mui.com)
drawings:
  persist: false
transition: slide-left
title: React and MUI
hideInToc: true
---

# [React](https://react.dev) and [MUI](https://mui.com)


---
hideInToc: true
---

# Table of Contents

<Toc columns={1} />

---

# [Vite](https://vitejs.dev)

- JavaScript

```bash
npm create vite@latest [PROJECT_NAME] -- --template react
```

- TypeScript

```bash
npm create vite@latest [PROJECT_NAME] -- --template react-ts
```

---
layout: two-cols
---

## Create Project

```bash
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
npm run dev
```

- `npm install` to install dependencies
- file structure

  ```
  - frontend/
    |- public/
    |- src/
    |- index.html
    |- vite.config.ts 

  ```

::right::

- available scripts in `package.json`
  - `npm run dev` to run dev server
  - `npm run build` to build for productive usage
  - `npm run dev` to preview project in production environments
  ```json
  {
    ...
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview"
    },
  }
  ```

---
layout: two-cols
---

# Structure of JSX/TSX
an embeddable XML-like syntax. It is meant to be transformed into valid JavaScript, though the semantics of that transformation are implementation-specific.

- [Hooks](https://react.dev/reference/react)
  - **useState: State Hooks**
  - **useEffect: Effect Hooks**
  - useContext: Context Hooks
  - useMemo: Performance Hooks
  - useCallback: Performance Hooks
- XML-like syntax
- [Event handling](https://react.dev/reference/react-dom/components/common)
  - onClick
  - onChange

::right::

```tsx {2|5-25|16} {lines:true}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
```

---

# [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- `fetch` is a Promise-based API
- `GET` request
  - [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

```ts
const params = new URLSearchParams({ operator: 'add', a: 1, b: 2 })
await fetch(`http://localhost:8000/math?${params.toString()}`)
```

- `POST` request

```ts
 const reponse = await fetch(`http://localhost:8000/math`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ operator: 'mul', a: 3, b: 2 }),
    })
```

> [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

---

# [CORS](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)

![CORS Error](/cors-error.png)

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

# Components

> React components are regular JavaScript functions, 
> but their names must start with a **capital letter** 
> or they won’t work!

```tsx
const Calculator = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [operator, setOperator] = useState('add')
  return <>
    <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
    <select value={operator} onChange={(e) => setOperator(e.target.value)}>
      <option value="add">+</option>
      <option value="sub">-</option>
      <option value="mul">*</option>
      <option value="div">/</option>
    </select>
    <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
    <button onClick={() => {
      fetch({
        method: 'POST',
        url: 'http://localhost:8000/math',
        body: JSON.stringify({ operator, a, b }),
      })
    }}>Calculate</button>
  </>
}
```

---
layout: two-cols
---

# File Upload

- [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
  - File -> dataURI
  - Response -> Blob -> ObjectURL

## Pick a file
```tsx
const [file, setFile] = useState<File | null>(null)
<input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
```

```tsx
// load file as an dataURI
const [dataURI, setDataURI] = useState<string | null>(null)

useEffect(() => {
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      setDataURI(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }
}, [file])
```

::right::

```tsx
// render image
{dataURI && <img src={dataURI} />}
```

```tsx
// upload file
const upload = async () => {
  if (file) {
    const formData = new FormData()
    formData.append('file', file)
    await fetch({
      method: 'POST',
      url: 'http://localhost:8000/upload',
      body: formData,
    })
  }
}
```

## Response to ObjectURL
```tsx
const blob = await response.blob();
return URL.createObjectURL(blob);
```

---

# Deployment

- [GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Google Firebase](https://vitejs.dev/guide/static-deploy.html#google-firebase)
- [Netlify](http://netlify.com/)
- [Vercel](http://vercel.com/)

---

# Some Useful Packages
- Routing
  - [React Router](https://reactrouter.com/en/main)
- Query
  - [React Query](https://tanstack.com/query/latest)
  - [SWR](https://swr.vercel.app)
  - [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- Context
  - [Redux Toolkit](https://redux-toolkit.js.org)
- SSR
  - [Next.js](http://Nextjs.org/)
  - [Remix](https://remix.run)
