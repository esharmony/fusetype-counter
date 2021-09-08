import Counter from '../FuseTypes/Counter';

const CounterButtons = () => {
  return <>
  <div id="btn">
    <button onClick={() => Counter.increment()}>Increment</button>
    <button onClick={() => Counter.decrement()}>Decrement</button>
    <button onClick={() => Counter.clearState()}>Reset</button>
  </div>
  </>
}
export default CounterButtons;