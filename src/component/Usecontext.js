import React, { useState } from 'react'
import Usecontext1 from './Usecontext1';

export const context =React.createContext();

function Usecontext() {
  const [sine, setsine]  = useState("poovita");
  
//   useEffect(()=>{     morden set of 
//     setsine("poovarasan")
//   },[]) 
    
  return (
    <context.Provider value={[sine, setsine]}>   
      <h1>{sine}</h1>
      <Usecontext1 />
    </context.Provider>
  )
}
 
// react hook that allow you to share values between multiple levele of components without pasing props through each leavel

export default Usecontext
