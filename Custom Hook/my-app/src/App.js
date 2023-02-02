import './App.css';
import { useEffect,useState } from 'react';
import Header from './Components/Header';
import UseFetch from './Components/UseFetch';
function App() {

const [data] = UseFetch("https://hub.dummyapis.com/employee?noofRecords=20&idStarts=1001")


  return (
    <div className="App">
      <Header />
      {
        data.map((el,i) => {
          return (
            <h1 key={i}>{el.firstName}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
