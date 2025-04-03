import { useEffect, useLayoutEffect, useState } from "react";

function UseLayoutEffect(){
    const [toggel,setToggle]=useState(false);
    useEffect(()=>{
        console.log("useEffect");
    },[toggel]);

    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    },[toggel]);

    return(
        <>
        <button onClick={()=>setToggle(!toggel)}>Toggel</button>
        {toggel && <h4>code bless you</h4>}
        
        </>
    );

}
export default UseLayoutEffect;