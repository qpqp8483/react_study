import Counter from './components/Counter';
import "../src/App.css";
import InfoControl from './components/InfoControl';
import Average from './components/Average';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <InfoControl></InfoControl>
      <Average></Average>
    </div>
  );
}

export default App;
