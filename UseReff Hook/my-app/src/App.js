import './App.css';
import Header from './Components/Header';
import {useState,useEffect,useRef} from 'react';

function App() {
  // const [input,setInput] = useState("");
  // const counter = useRef(0);
  const inputValid = useRef()


  // useEffect(() => {
  //  counter.current = counter.current + 1
  // })
 
  // const formHandler = (e) => {
  //    setInput(e.target.value)
  // }

  const getData = () => {
   console.log(inputValid.current.value) 
   inputValid.current.style.border = "4px solid blue"
  }

  return (
    <div className="App">
    <Header />
    <input ref={inputValid} className='inp' value={input} onChange={formHandler} />
    <button onClick={getData}>Submit</button>
    <h1>How Many Time It's Render {counter.current}</h1>
  </div>
  );
}

export default App;
