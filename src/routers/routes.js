import {lazy} from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Main = lazy(() => import('../layouts/Main'))

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  }
])