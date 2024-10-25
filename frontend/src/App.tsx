import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import Home from './pages/Home'

function App() {

  return (
    <NextUIProvider className='dark'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
  </NextUIProvider>
  )
}

export default App
