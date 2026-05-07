import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Desarrollador from './pages/Desarrollador'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/desarrollador', element: <Desarrollador /> },
  { path: '*', element: <NotFound /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App