import React, { useEffect, useState } from 'react'

function Useeffect () {
    const [name, setname] = useState(null)
      useEffect(()=>{
   const fetchdata = async ()=>{
      const data = await fetch("https://api.github.com/users/poovarasan195");
      const responce = await data.json()
      setname(responce)
   }
   fetchdata();
      },[])
    
       return(
          <>
           {name && 
           <div>
              <h1> {name.id}</h1>
              <span> {name.name}</span>
              <p>{name.bio}</p>
            </div>}
          </>
       )
}

// it is a react hook used to perform side effets of functional components such as fetching data , subscribing to events or
// updating the dom

export default Useeffect
