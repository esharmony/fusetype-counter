import { useEffect, useState } from "react";
import Counter, { CounterState } from '../FuseTypes/Counter';


const ViewCounter = () => {

  const [counter, setCounter] = useState<CounterState>(Counter.state);

  const updateCounter = (state:CounterState) => {
      setCounter(state);
  } 

  useEffect(() => {

    Counter.register(updateCounter, ViewCounter.name);

    return () => Counter.remove(ViewCounter.name);
  },[]);
  return <h1 style={{color:'white'}}>{counter.count}</h1>;
}

export default ViewCounter;