import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routers/routes'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className=''>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App