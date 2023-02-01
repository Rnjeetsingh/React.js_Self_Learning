import './App.css';
import Header from './Components/Header';
import { useReducer } from 'react';

const reducer = (state,action) => {
  if(action.type == "INC"){
    return (state + 2);
  }
  else if(action.type == "DEC"){
    return (state - 2);
  }
  else if(action.type == "MUL"){
    return (state * 2);
  }
  }

function App() {
const [state,dispatch] = useReducer(reducer,0)


  return (
    <div className="App">
      <Header />
      <h1>{state}</h1>
      <button className='btn' onClick={() => dispatch({type:"INC"})}>INCRIMENT</button>
      <button className='btn' onClick={() => dispatch({type:"DEC"})}>DECRIMENT</button>
      <button className='btn' onClick={() => dispatch({type:"MUL"})}>MULTIPLICATION</button>
    </div>
  );
}

export default App;
