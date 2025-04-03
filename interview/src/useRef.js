import { useEffect, useRef, useState } from "react";

function UseRef(){
    const[name,setName]=useState("");
    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    });
    return(
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
            <h2>name:{name}</h2>
            <h2>render:{count.current}</h2>
        </div>
    );

}
export default UseRef;