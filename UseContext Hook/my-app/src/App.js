import './App.css';
import Header from './Components/Header';
import React,{useState,createContext} from 'react';
import CompA from './Components/CompA';

const AppState = createContext();
const numData = createContext();

function App() {
const [data,setData] = useState("Ranjeet Singh")
const [name,setName] = useState({name: "Aastha Mishra",age: 23})
const [number,setNumber] = useState("9370983954");

  return (
    <div className="App">
    <AppState.Provider value={{data,name}}>
    <numData.Provider value={number}>
      <Header />
      <CompA />
      </numData.Provider>
      </AppState.Provider>
    </div>
  );
}

export default App;
export {AppState,numData}
