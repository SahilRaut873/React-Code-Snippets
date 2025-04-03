import React, { useState } from 'react'


function ObjLiteral() {
    const [sobj, setCount]=useState({
        count:0,
        mFlag:true
    });
    const counHandler=(op)=>{
        let tc=sobj.count
        if(op==="+"){
            tc++;
            setCount({...sobj,count:tc});
        }else{
            tc--;
            setCount({...sobj,count:tc});
        }
    }
  return (
    <div>
        <h1>Counter:{sobj.count}</h1>
        <button onClick={()=>counHandler("+")}>Inccrase</button>
        <button onClick={()=>counHandler("-")}>Decrease</button>
        <h3>{sobj.mFlag.toString()}</h3>
        <h3>{JSON.stringify(sobj)}</h3>
        <button onClick={()=>setCount({...sobj,mFlag:!sobj.mFlag})}>Toggle</button>
      
    </div>
  )
}

export default ObjLiteral;
