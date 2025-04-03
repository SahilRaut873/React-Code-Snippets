import React, { useCallback, useState } from 'react'
import HeaderCallBack from './HeaderCallBack';

function UseCallback() {
    const [count,setCount]=useState(0);
    const [add,setAdd]=useState(0);
     const newFun = useCallback((add)=>{},[add])
  return (
    <div>
        <HeaderCallBack newFun={newFun} add={add}/>
        <h1>Count :{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <h1>Add : {add}</h1>
        <button onClick={()=>setAdd(add+1)}>Add</button>
      
    </div>
  )
}

export default UseCallback
