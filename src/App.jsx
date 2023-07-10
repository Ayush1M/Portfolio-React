import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import HostLayout from './components/HostLayout'

function App() {
  return (
    <div>
    <Routes>
      <Route element={<HostLayout />}>
      <Route index element={<Home />} />
      <Route path = "/projects" element={<Projects />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
