import './App.css';
import Header from './Components/Header';
import {TailSpin,ThreeCircles,Bars} from 'react-loader-spinner'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
const [loader,setLoader] = useState(false);
const [data,setData] = useState([]);

useEffect(() =>{
  setLoader(true);
  async function getData (){
    const res = await fetch("https://hub.dummyapis.com/employee?noofRecords=400&idStarts=1001");
    const result = await res.json();
    console.log(result)
    setData(result);
    setLoader(false);
    toast.success("Succesfully Featch Data")
  }
  getData();
},[]);

  return (
    <div className="App">
     <Header />
     <ToastContainer />
     <div className='loader'>
    {
      loader ? 
      <ThreeCircles color='red' height={400}/> :
      data.map((el,i) => {
        return(
          <div key={i} >
          <h1>{el.firstName}</h1>
          <h1>{el.email}</h1>
          </div>
        )
      })
    }
     </div>
    </div>
  );
}

export default App;
