import React, { useState } from 'react'

function Usestate() {
    const [count , setcount] = useState(0)
  return (
    <div>
        <h1>count{count}</h1>
        <button onClick={()=> setcount( count + 1)}>inc</button>
        <button onClick={()=> setcount( count - 1)}>dec</button>
    </div>
  )
}
// usestate is the react  functional hook that allows and manage their state

export default Usestate