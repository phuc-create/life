import React from 'react'
import './index.scss'
import { Routes, Route } from 'react-router-dom'
import GameWelcome from './pages/GameWelcome'
import NewGame from './pages/NewGame'

 const App = function () {
    return (
      <Routes>
        <Route path="/" element={<GameWelcome />} />
        <Route path="/new" element={<NewGame />} />
      </Routes>
    )
}

export default App
