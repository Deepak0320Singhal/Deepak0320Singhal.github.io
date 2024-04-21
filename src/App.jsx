import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Project from './Routes/Project'
import Contact from './Routes/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
