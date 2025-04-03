import { useEffect, useState } from "react";

function UseEffect(){
    const [count, setCount]=useState(0);
    useEffect(()=>{
        document.title=`${count} new Message`;
    }, []);
    return(
        <div>
            <h1>{count} new Message</h1>
            <button onClick={()=> setCount(count+1)}> Inccrase</button>
        </div>
    );

}
export default UseEffect;