import { useState } from 'react'

import {Image , DogCard} from './DogCard'

import Cow from './CowCard'

import MyH from './component/MyH'
import Card from './component/Card'
import Counter from './component/Counter'


function App() {
  let [details, setDetails] = useState("dhiraj");

  const handleClick = () => {
    details = setDetails("kunal")

  }

  return (
    <>

    <Counter></Counter>
















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
