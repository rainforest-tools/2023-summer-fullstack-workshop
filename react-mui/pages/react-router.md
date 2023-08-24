# [React Router](https://reactrouter.com/en/main)

- React Router enables "client side routing".
- app can immediately render some new UI
-  enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page.

## Installation

```bash
npm install react-router-dom
```

---

## BrowserRouter v.s. HashRouter v.s. MemoryRouter

<div class="flex gap-4 justify-between mt-4">

<div class="flex-1">

```
<BrowserRouter></BrowserRouter>

createBrowserRouter([])
```

- the recommended router for all React Router web projects

- uses the HTML5 history API to keep your UI in sync with the URL

</div>

<div class="flex-1">

```
<HashRouter></HashRouter>

createHashRouter([])
```

- useful if you are unable to configure your web server to direct all traffic to your React Router application

-  will use the hash (#) portion of the URL to manage the "application URL".

</div>

<div class="flex-1">

```
<MemoryRouter></MemoryRouter>

createMemoryRouter([])
```

- manages its own history stack in memory

- does not read or write to the address bar

- useful in tests and non-browser environments like React Native

</div>

</div>

---
layout: two-cols
class: first:pr-4 last:pl-4
---

## Define Routes

### createXXXRouter

```ts
const router = createXXXRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calculator',
    element: <Calculator />,
  },
  {
    path: '/photo',
    element: <Photo />,
  }
])

<RouterProvider router={router} />
```

::right::

### XXXRouter

```tsx
<XXXRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/photo" element={<Photo />} />
  </Routes>
</XXXRouter>
```

---
layout: two-cols
class: first:pr-4 last:pl-4
---

## Nested Routes

### createXXXRouter

```ts
const router = createXXXRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/calculator',
        element: <Calculator />,
      },
      {
        path: '/photo',
        element: <Photo />,
      }
    ]
  }
])
```

::right::

### XXXRouter

```tsx
<XXXRouter>
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/photo" element={<Photo />} />
    </Route>
  </Routes>
</XXXRouter>
```

