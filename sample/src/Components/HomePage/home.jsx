import React from 'react';
import {store} from '../../Redux/store';
import {increment , reset , decrement} from '../../Redux/counter';
import { useSelector , useDispatch } from 'react-redux';

function Home() {
  const store = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter :{store} </h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={()=>dispatch(decrement())}> Decrement</button>
        
      
    </div>
  )
}

export default Home
