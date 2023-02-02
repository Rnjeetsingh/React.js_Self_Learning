import './App.css';
import Header from './Components/Header';
import { useCallback,useState } from 'react';
import Todos from './Components/Todos';
function App() {
 const [count,setCount] = useState(0);
 const [todos,setTodos] = useState([]);

 const increment = () => {
  setCount((count) => count + 1);
 }

 const addtodos = useCallback(() => {
  setTodos((todos) => [...todos,"New Todos"])
 },[todos])
  
 

  return (
    <div className="App">
      <Header />
      <button onClick={increment}>Increment </button>
      <h1>Count : {count}</h1>
      <hr />
      <Todos todos={todos} addtodos={addtodos}/>
    </div>
  );
}

export default App;
