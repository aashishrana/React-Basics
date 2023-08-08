import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogCard from './DogCard'

import Cow from './CowCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <DogCard></DogCard>
      <DogCard />
      <DogCard />
      <Cow />

    </>
  )
}

export default App
