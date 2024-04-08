import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Userediuser() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>count {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>INC</button> 
      <button onClick={() => dispatch({ type: 'DECREASE' })}>DEC</button> 
    </div>
  );
}
//  usereducer is  used for statment management in functional components it takes in a reduce function and an initial state 

export default Userediuser;
