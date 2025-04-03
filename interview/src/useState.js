import { useState } from "react";

function UseState(){
    const [counter, setCounter]=useState(0);
    function increaseCounter(){
        setCounter(counter+1);
    }
    return(
        <div>
            <h1>counter: {counter}</h1>
            <button onClick={increaseCounter}>Inccrase</button>
        </div>
    );

}
export default UseState;