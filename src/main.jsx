import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import FitnessCalculator from './Components/FitnessCalculator.jsx'
import NotFound from './Pages/NotFound.jsx'


const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/fitnesscalculator' element={< FitnessCalculator/>} />
    <Route path='*' element={< NotFound/>} />
  </Route>
)
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
