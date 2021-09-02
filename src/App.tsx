import './App.css';
import ViewCounter from './components/viewCounter';
import CounterButton from './components/counterButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter Example
        </p>
        

      <ViewCounter />
      <CounterButton />
      </header>
    </div>
  );
}

export default App;
