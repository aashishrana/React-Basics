import { useState } from "react";  // hooks are simple utilities

function Counter() {

    const [x, setx] = useState(0);

    const [y , sety] = useState(1);


    return (

        
        <>
        <h1>Jai Shree Ram</h1>

        <h3>My new Counter componet</h3>

        count x : {x};

        <button onClick={() => setx(x + 1)}>Inc</button>
        <button onClick={() => setx(x - 1)}>Decr</button>

        count y : {y};

        <button onClick={() => sety(y + 1)}>Inc</button>
        <button onClick={() => sety(y - 1)}>Dec</button>
        
        </>
    )

}

export default Counter;