import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import HomePage from './pages/HomePage'
import EditorPage from './pages/EditorPage'

function AppRoutes() {

  return (
    <NextUIProvider className='dark'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/editor' element={<EditorPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Router>
    </NextUIProvider>
  )
}

export default AppRoutes
