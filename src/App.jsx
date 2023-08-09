import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Image , DogCard} from './DogCard'

import Cow from './CowCard'

import MyH from './component/MyH'
import Card from './component/Card'


function App() {
  let [details, setDetails] = useState("dhiraj");

  const handleClick = () => {
    details = setDetails("kunal")

  }

  return (
    <>
      <h1>{details}</h1>

      <button onClick={handleClick}>Click me</button>
      <DogCard></DogCard>
      <DogCard />
      <DogCard />
      <Cow />
      <MyH></MyH>
      <Card name="Aashish" email="a@pw.live"></Card>
      <Card name="Rana" email="a@pw.live"></Card>
  

    </>
  )
}

export default App
