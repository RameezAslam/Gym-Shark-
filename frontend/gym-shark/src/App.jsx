import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import "keen-slider/keen-slider.min.css";
import Login from './pages/Login'
import Signup from './pages/Signup'
import SingleProductPage from './pages/SingleProductPage'
import Checkout from './pages/Checkout';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout />} >
               <Route index element={<LandingPage />} />
               <Route path='product/:id' element={<SingleProductPage />} />
             </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
