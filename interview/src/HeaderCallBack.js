import React from 'react'

function HeaderCallBack({add}) {
    console.log("Render")
  return (
    <div>
      <h1>Header {add}</h1>
    </div>
  )
}

export default React.memo(HeaderCallBack);
