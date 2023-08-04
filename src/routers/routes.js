import {lazy} from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Projects from '../pages/Projects/Projects';

const Home = lazy(() => import("../pages/HomePage/Home"));
const Main = lazy(() => import("../layouts/Main"));



export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      }
    ]
  }
])