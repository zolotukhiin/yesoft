import { useState } from 'react'
import './App.css'

import { Aboutme } from './components/Aboutme'
import { Competens } from './components/Competens'
import { Featureskills } from './components/Featureskills'


function App() {
  return (
    <>
      <h1>The long ride in React</h1>
      <Aboutme />
      <Competens />
      <Featureskills />
    </>
  )
}

export default App
