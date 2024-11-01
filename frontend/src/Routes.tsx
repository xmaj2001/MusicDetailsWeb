import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import HomePage from './pages/HomePage'
import EditorPage from './pages/EditorPage'
import EditorPage2 from './pages/EditorPage2'

function App() {

  return (
    <NextUIProvider className='dark'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/editor' element={<EditorPage2 />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Router>
    </NextUIProvider>
  )
}

export default App
