import './App.css';
import {useState,useMemo} from "react";
import Header from './Components/Header';

function App() {
  
const [count,setCount] = useState(0);
const [name,setName] = useState('');

const expansivCalculating = (num) => {
  for(let i = 0; i < 1000000000000000; i++){
    return num
  }
};

const caluclating = useMemo(() => {
 expansivCalculating(count)
},[count]) ;




  return (
    <div className="App">
    <Header />

    <button onClick={() => setCount(count + 1)}>Click Me</button>
    <h1>Count : {count}</h1>
    <input onChange={(e) => setName(e.target.value)} />
    <h1>Name : {name}</h1>
    </div>
  );
}

export default App;
