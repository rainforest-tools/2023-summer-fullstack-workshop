import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import browserRouter from './routes'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator count={0} op={OperatorEnum.MULTIPLY} />} />
        <Route path='/photo' element={<Photo />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>,
)
