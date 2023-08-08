import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Image , DogCard} from './DogCard'

import Cow from './CowCard'

import MyH from './component/MyH'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <DogCard></DogCard>
      <DogCard />
      <DogCard />
      <Cow />
      <MyH></MyH>

    </>
  )
}

export default App
