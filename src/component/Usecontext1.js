import React,{useContext} from 'react'
import { context } from './Usecontext'


function Usecontext1() {
    const [user] = useContext(context)
  return (
    <div>
      <h1>the value is {user}</h1>
    </div>
  )
}

export default Usecontext1
