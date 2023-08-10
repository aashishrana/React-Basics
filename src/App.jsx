import { useState } from "react";

import { Image, DogCard } from "./DogCard";

import Cow from "./CowCard";

import MyH from "./component/MyH";
import Card from "./component/Card";
import Counter from "./component/Counter";
import Avatar from "./component/Avatar";

function App() {
  let [details, setDetails] = useState("dhiraj");

  const handleClick = () => {
    details = setDetails("kunal");
  };

  return (
    <>
      

      <Avatar
        src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
        width="100px"
        height="100px"
      />

      <br></br>

      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWg6cEGOkqkDOldajm1-JBfA4p7d34qALSNpdCrBfDqg&s"
        width="100px"
        height="100px"
      />

      <Avatar
        src="https://static.vecteezy.com/system/resources/thumbnails/017/323/715/small/3d-render-adorable-close-up-of-a-american-eskimo-dog-holding-red-rose-in-mouth-on-white-background-photo.jpg"
        width="100px"
        height="100px"
      >
        <span>Child Tag</span>
      </Avatar>  

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
  );
}

export default App;
