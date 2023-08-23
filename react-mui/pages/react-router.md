# [React Router](https://reactrouter.com/en/main)

---

## BrowserRouter v.s. HashRouter v.s. MemoryRouter

---
layout: two-cols
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

## Nested Routes

---