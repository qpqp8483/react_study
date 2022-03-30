import './App.css';
import ConuterContainer from './containers/ConuterContainer';
import TodosContainer from './containers/TodosContainer';
function App() {
  return (
    <div>
      <ConuterContainer number={0}/>
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
