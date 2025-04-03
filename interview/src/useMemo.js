import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [number,setNumber]=useState(0);
    const [counter,setCounter]=useState(0);

    function cubNum(num){
        console.log("Calculation Done..");
        return Math.pow(num,3);
    }
    const result=useMemo(()=>cubNum(number),[number])
  return (
    <div>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <h1>Cuber of number : {result}</h1>

        <h1>Count : {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
      
    </div>
  )
}

export default UseMemo

